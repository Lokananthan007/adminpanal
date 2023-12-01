import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import '../catalog/Categories.css';
import { FaPlus } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";



function Categories(){
  const [data, setData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [editCategory, setEditCategory] = useState("");
  const [editSubcategory, setEditSubcategory] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:2233/insert/categories");
      const sortedCategories = response.data.categories.sort((a, b) => b._id.localeCompare(a._id));
      setData(sortedCategories);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    if (selectAllChecked) {
      const allCategoryIds = data.map((category) => category._id);
      setSelectedCategories(allCategoryIds);
    } else {
      setSelectedCategories([]);
    }
  }, [selectAllChecked, data]);

  const handleCheckboxChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  const handleSelectAllChange = () => {
    setSelectAllChecked(!selectAllChecked);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete the selected categories?")) {
      try {
        await axios.delete("http://localhost:2233/delete/categories", { data: { ids: selectedCategories } });
        fetchData();
        setSelectedCategories([]);
        setSelectAllChecked(false);
      } catch (error) {
        console.error("Error deleting categories:", error.message);
      }
    }
  };

  const handleEditClick = (category, subcategory) => {
    setEditCategory(category);
    setEditSubcategory(subcategory);
    setShowEditModal(true);
  };

  const handleUpdate = async () => {
    if (window.confirm("Are you sure you want to update the selected categories?")) {
      try {
        await axios.put("http://localhost:2233/update/categories", {
          ids: selectedCategories,
          updatedData: {
            category: editCategory,
            subcategory: editSubcategory,
          },
        });
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
    <div className="catagories">
      <div className="home2">
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
              <div className="col-lg-2 ps-2 addnew">
                <Link to="/admin/catalog/categories/add" style={{textDecoration: 'none'}}   title="Add New"> <FaPlus style={{backgroundColor:'blue'}} className="icon ps-1 pe-1 " /></Link>
                <button>
                  <FiRefreshCw style={{backgroundColor:'gray'}}  className="icon ps-1 pe-1" />
                </button>
                <button>
                  <MdDelete onClick={handleDelete} style={{backgroundColor:'red'}} className="icon ps-1 pe-1"  title="Delete"/>
                </button>
              </div>
              <hr></hr>
            </div>
           
        </div>
        </div>
        <div id="table" className="table-responsive mt-1">
        {data.length > 0 ? (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th style={{textAlign:'center'}}><input
                      type="checkbox"
                      checked={selectAllChecked}
                      onChange={handleSelectAllChange}
                    />All</th>
                <th style={{textAlign:'center'}}>S.No</th>    
                <th style={{textAlign:'center'}}>Category</th>
                <th style={{textAlign:'center'}}>Subcategory</th>
                <th style={{textAlign:'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
            {data.map((category,index) => (
                <tr
                  key={category._id}
                  className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}
                >
                  <td style={{width:'10%',textAlign:'center'}}>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category._id)}
                      onChange={() => handleCheckboxChange(category._id)}
                    />
                  </td>
                  <td style={{width:'10%',textAlign:'center'}}>{index+1}</td>
                  <td style={{width:'30%',textAlign:'center'}}>{category.category}</td>
                  <td style={{textAlign:'center'}}>{category.subcategory}</td>
                  <td style={{textAlign:'center'}}>
                    <button style={{border:'none'}} onClick={() => handleEditClick(category.category, category.subcategory)}>
                    <FaRegEdit style={{backgroundColor:'gold',height:'30px',width:'30px'}}/>
                    </button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{textAlign:'center',color:'red',fontSize:' 40px'}}>Categories Not Available</p>
        )}
      </div>
      {editCategory && editSubcategory && showEditModal && (
        <div className="edit-modal">
          <h2>Edit Category</h2>
          <label htmlFor="editCategory">Category:</label>
          <input
            type="text"
            id="editCategory"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          />
          <label htmlFor="editSubcategory">Subcategory:</label>
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
    

  )
}
export default Categories;