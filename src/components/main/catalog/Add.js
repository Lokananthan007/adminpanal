import {React,useState }from "react";
import axios from 'axios';


function Add() {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const handleSubmit = async () => {
    try {
      // Send a POST request to the server
      const response = await axios.post('http://localhost:2233/insert', {
        category,
        subcategory,
      });

      console.log('Category inserted successfully:', response.data);
    } catch (error) {
      console.error('Error inserting category:', error);
    }
  };



  return (
    <div className="categories">
      <div className="container d-block">
        <div className="card" style={{ width: "70%", height: "300px" }}>
          <div className="form ps-5 ms-5">
          <form  action="/insert" method="POST" encType="multipart/form-data" style={{ width: "100%" }} >
          <label htmlFor="category">Category:</label><br/>
            <input 
              type="text" 
              name="category" 
              id="category"
              className="form-control mt-4 ms-5"
              style={{ width: "60%",paddingLeft:'18px' }}
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required/><br/>
            <label htmlFor="subcategory">Subcategory:</label><br/>
            <input
              type="text"
              name="subcategory"
              id="category"
              className="form-control mt-4 ms-5"
              style={{ width: "60%",paddingLeft:'18px' }}
              placeholder="Subcategory"
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              required
            />
            
            <button type="button" onClick={handleSubmit} className="btn btn-primary ms-5 mt-4">
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
