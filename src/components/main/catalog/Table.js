import React from "react";

function Table({ tableData, handleDelete }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Category</th>
          <th>Subcategory</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{data.category}</td>
            <td>{data.subcategory}</td>
            <td>{data.discription}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;





