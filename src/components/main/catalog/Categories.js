

import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import '../catalog/Categories.css';
import { FaPlus } from "react-icons/fa";
import {FiRefreshCw } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function Categories(){
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
                <Link to="/add" style={{textDecoration: 'none'}}   title="Add New"> <FaPlus style={{backgroundColor:'blue'}} className="icon ps-1 pe-1 " /></Link>
                <Link to="#" style={{textDecoration: 'none'}}   title="Refresh"> <FiRefreshCw style={{backgroundColor:'gray'}}  className="icon ps-1 pe-1" /></Link>
                <Link to="#" style={{textDecoration: 'none'}}   title="Delete"> <MdDelete style={{backgroundColor:'red'}} className="icon ps-1 pe-1" /></Link>
              </div>
              <hr></hr>
            </div>
        </div>
        </div>
      
      </div>
    

  )
}
export default Categories;