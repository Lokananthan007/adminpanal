import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import '../catalog/Categories.css';
import { RiArrowGoBackFill } from "react-icons/ri";

import axios from "axios";
import React, { useState  } from "react";
import { useLocation } from "react-router-dom";

function Edit() {
  const location = useLocation();
  const {
    category: initialCategory,
    subcategory: initialSubcategory,
    fetchData,
    selectedCategories,
    setSelectedCategories,
    setSelectAllChecked,
  } = location.state || {};
  const [editCategory, setEditCategory] = useState(initialCategory || "");
  const [editSubcategory, setEditSubcategory] = useState(initialSubcategory || "");
  const [showEditModal, setShowEditModal] = useState(true);

  const handleUpdate = async () => {
    if (!selectedCategories || selectedCategories.length === 0) {
      window.alert("Please select categories to update.");
      return;
    }

    if (!editCategory.trim() || !editSubcategory.trim()) {
      window.alert("Please enter values for both Category and Subcategory.");
      return;
    }

    if (window.confirm("Are you sure you want to update the selected categories?")) {
      try {
        const response = await axios.put("http://localhost:2233/update/categories", {
          ids: selectedCategories,
          updatedData: {
            category: editCategory,
            subcategory: editSubcategory,
          },
        });

        // Check the response to see if the update was successful
        console.log("Update Response:", response);

        fetchData();
        setSelectedCategories([]);
        setSelectAllChecked(false);
        setEditCategory("");
        setEditSubcategory("");
        setShowEditModal(false);
      } catch (error) {
        console.error("Error updating categories:", error.message);
      }
    }
  };

  
  
    return(
      <div className="edit">
      <div className="home4">
        <div className="header">
        <div className="row">
              <div className="col-lg-2 ps-4">
                <h2>Catagories</h2>
              </div>
              <div className="col-lg-1 hometext pt-2">
                <Link to="/admin/catalog/categories" style={{color:"gray",fontSize:"20px",textDecoration:"none"}}>Home<IoIosArrowForward /></Link>
              </div>
              <div className="col-lg-1 text2 pt-2">
                <Link to="/admin/catalog/categories"style={{color:"blue",fontSize:"20px",textDecoration:"none"}}>Categories</Link>
              </div>
              <div className="col-lg-6"></div>
              <div className="col-lg-2 ps-2 goback">
                <Link to="/admin/catalog/categories" style={{textDecoration: 'none'}}   title="Go Back"> <RiArrowGoBackFill style={{backgroundColor:'blue'}} className="icon ps-1 pe-1 " /></Link>
              </div>
              <hr></hr>
            </div>
           
        </div>
        </div>
        
      
    

      
        <div className="card" style={{ width: "70%", height: "300px", marginLeft: "21%" }}>
        <div className="form ps-5 ms-5">
        {showEditModal && (
        <div className="edit-modal">
          <h2>Edit Category</h2>
          <label>Category:</label>
          <input
            type="text"
            id="editCategory"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          />
          <label>Subcategory:</label>
          <input
            type="text"
            id="editSubcategory"
            value={editSubcategory}
            onChange={(e) => setEditSubcategory(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setShowEditModal(false)}>Cancel</button>
        </div>
      )}
        </div>
        </div>
      </div>
  
          
    );
}
export default Edit;