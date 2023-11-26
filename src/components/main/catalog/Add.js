import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import '../catalog/Categories.css';


function Add() {
  const [formInputData, setFormInputData] = useState({
    category: "",
    subcategory: "",
  });

  const handleChange = (evnt) => {
    const newInput = { ...formInputData, [evnt.target.name]: evnt.target.value };
    setFormInputData(newInput);
  };

  const handleSubmit = async (evnt) => {
    evnt.preventDefault();
    console.log(formInputData);
    try {
      const response = await axios.post("http://localhost:2233/insert/categories", formInputData);

      console.log(response.data.message); 
      console.log(response.data.user);

    } catch (error) {
      console.error("Error sending data:", error.message);
    }
  };

  return (
      <div className="add">
      <div className="home3">
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
                {/* <Link to="/admin/catalog/categories/add" style={{textDecoration: 'none'}}   title="Add New"> <FaPlus style={{backgroundColor:'blue'}} className="icon ps-1 pe-1 " /></Link>
                <Link to="#" style={{textDecoration: 'none'}}   title="Reset"> <FiRefreshCw style={{backgroundColor:'gray'}}  className="icon ps-1 pe-1" /></Link>
                <Link to="#" style={{textDecoration: 'none'}}   title="Delete"> <MdDelete style={{backgroundColor:'red'}} className="icon ps-1 pe-1" /></Link> */}
              </div>
              <hr></hr>
            </div>
           
        </div>
        </div>
            


      <div className="container">
        <div className="card" style={{ width: "70%", height: "300px" }}>
          <div className="form ps-5 ms-5">
            <form
              action="/insert"
              method="POST"
              encType="multipart/form-data"
              style={{ width: "100%" }}
            >
              <input
                type="text"
                onChange={handleChange}
                value={formInputData.category}
                name="category"
                className="form-control mt-4 ms-5"
                placeholder="Category"
                style={{ width: "60%", paddingLeft: "18px" }}
                required
              />
              <br />

              <input
                type="text"
                onChange={handleChange}
                value={formInputData.subcategory}
                name="subcategory"
                className="form-control  mt-4 ms-5"
                style={{ width: "60%", paddingLeft: "18px" }}
                placeholder="Subcategory"
                required
              />

              <button
                type="button"
                onClick={handleSubmit}
                className="btn btn-primary ms-5 mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Add;
