import React from "react";

const AddProduct = () => {
  return (
    <div
      className="add_product"
      style={{
        marginTop: "64px",
        marginLeft: "280px",
        backgroundColor: "#eee",
      }}
    >
      <div className="form-group row">
        <label htmlFor="productName">Product Name</label>
        <input
          type="email"
          className="form-control"
          id="productName"
          placeholder="Enter product 's name"
        ></input>
      </div>
    </div>
  );
};

export default AddProduct;
