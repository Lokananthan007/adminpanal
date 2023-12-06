import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RiArrowGoBackFill } from "react-icons/ri";
import axios from "axios";

function Edit() {
  const { categoryId } = useParams();
  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`http://localhost:2233/insert/categories/${categoryId}`);
        const responseData = response.data;

        if (response.status === 200) {
          setFormData({
            category: responseData.category || "",
            subcategory: responseData.subcategory || "",
          });
        } else {
          setError("Failed to fetch category data");
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
        setError("Failed to fetch category data");
      }
    };

    fetchCategoryData();
  }, [categoryId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); 
    try {
      const response = await axios.put(`http://localhost:2233/insert/categories/${categoryId}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setSuccess(true);
        setError("");
      } else {
        setSuccess(false);
        setError("Failed to update category");
      }
    } catch (error) {
      console.error("Error updating category:", error);
      setSuccess(false);
      setError("Failed to update category");
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
              <div className="col-lg-2 ps-2 goback">
                <Link to="/admin/catalog/categories" style={{textDecoration: 'none'}}   title="Go Back"> <RiArrowGoBackFill style={{backgroundColor:'blue'}} className="icon ps-1 pe-1 " /></Link>
              
              </div>
              <hr></hr>
            </div>
           
        </div>
      </div>

      <div className="container">
        <div className="card" style={{ width: "70%", height: "300px" }}>
          <div className="form ps-5 ms-5">
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              style={{ width: "100%" }}
            >
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control mt-4 ms-5"
                placeholder="Category"
                style={{ width: "60%", paddingLeft: "18px" }}
                required
              />
              <br />

              <input
                type="text"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleChange}
                className="form-control mt-4 ms-5"
                style={{ width: "60%", paddingLeft: "18px" }}
                placeholder="Subcategory"
                required
              />

              <button type="submit" className="btn btn-primary ms-5 mt-4">
                Submit
              </button>

              {/* Error and success messages */}
              {error && (
                <div className="alert alert-danger mt-2" style={{ width: "60%", marginLeft: "6%", textAlign: 'center' }}>
                  {error}
                </div>
              )}
              {success && (
                <div className="alert alert-success mt-4" style={{ width: "60%", marginLeft: "6%", textAlign: 'center' }}>
                  Successfully Updated!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;