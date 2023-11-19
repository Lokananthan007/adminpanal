import React, { useState } from "react";
import Table from "./Table";

function Categories() {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setFormInputData] = useState({
    category: "",
    subcategory: "",
    discription: "",
  });

  const handleChange = (evnt) => {
    const newInput = { ...formInputData, [evnt.target.name]: evnt.target.value };
    setFormInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every((res) => res === "");
    if (checkEmptyInput) {
      const newData = [...tableData, formInputData];
      setTableData(newData);
      const emptyInput = { category: "", subcategory: "", discription: "" };
      setFormInputData(emptyInput);
    }
  };

  const handleDelete = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
  };

  return (
    <div className="categories">
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="form-row row">
              <div className="col">
                <input
                  type="text"
                  onChange={handleChange}
                  value={formInputData.category}
                  name="category"
                  className="form-control"
                  placeholder="Category"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  onChange={handleChange}
                  value={formInputData.subcategory}
                  name="subcategory"
                  className="form-control"
                  placeholder="Subcategory"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  onChange={handleChange}
                  value={formInputData.discription}
                  name="discription"
                  className="form-control"
                  placeholder="Description"
                />
              </div>
              <div className="col">
                <input type="submit" onClick={handleSubmit} className="btn btn-primary" />
              </div>
            </div>
            <Table tableData={tableData} handleDelete={handleDelete} />
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Categories;