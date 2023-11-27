

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import '../catalog/Categories.css';
import { FaPlus } from "react-icons/fa";
import {FiRefreshCw } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import axios from "axios";



function Categories(){
  const [data, setData] = useState([]); 
  const [selectedCategories, setSelectedCategories] = useState([]);

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
  

  const handleCheckboxChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
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
                <Link to="#" style={{textDecoration: 'none'}}   title="Reset"> <FiRefreshCw style={{backgroundColor:'gray'}}  className="icon ps-1 pe-1" /></Link>
                <Link to="#" style={{textDecoration: 'none'}}   title="Delete"> <MdDelete style={{backgroundColor:'red'}} className="icon ps-1 pe-1" /></Link>
              </div>
              <hr></hr>
            </div>
           
        </div>
        </div>
        <div className="container" style={{width:'60%'}}>
        {data.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th>Checkbox</th>
                <th>Category</th>
                <th>Subcategory</th>
              </tr>
            </thead>
            <tbody>
              {data.map((category) => (
                <tr key={category._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category._id)}
                      onChange={() => handleCheckboxChange(category._id)}
                    />
                  </td>
                  <td>{category.category}</td>
                  <td>{category.subcategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={{textAlign:'center',color:'red',fontSize:' 40px'}}>No categories available</p>
        )}
      </div>
      
      </div>
    

  )
}
export default Categories;