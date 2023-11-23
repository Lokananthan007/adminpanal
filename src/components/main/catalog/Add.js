import React from "react";


function Add() {



  return (
    <div className="categories">
      <div className="container d-block">
        <div className="card" style={{ width: "70%", height: "300px" }}>
          <div className="form ps-5 ms-5">
          <table  style={{ width: "100%" }} action="/insert" method="POST" enctype="multipart/table-data">
          <label htmlFor="category">Category:</label><br/>
            <input 
              type="text" 
              name="category" 
              id="category"
              className="form-control mt-4 ms-5"
              style={{ width: "60%",paddingLeft:'18px' }}
              placeholder="Category"
              required/><br/>
            <label htmlFor="subcategory">Subcategory:</label><br/>
            <input
              type="text"
              name="subcategory"
              id="category"
              className="form-control mt-4 ms-5"
              style={{ width: "60%",paddingLeft:'18px' }}
              placeholder="Subcategory"
            />
            
            <button
              type="submit"
              className="btn btn-primary ms-5 mt-4"
            >
              Submit
            </button>
            </table>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Add;
