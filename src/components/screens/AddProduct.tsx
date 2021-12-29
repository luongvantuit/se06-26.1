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
      <div className="sale-infomation">
        <div className="form-group row">
          <label htmlFor="productName">Product Name</label>
          <input
            type="email"
            className="form-control"
            id="productName"
            placeholder="Enter product 's name"
          ></input>
        </div>
        <div className="form-group row">
          <label htmlFor="categories">Category</label>
          <select className="form-control" id="categories">
            <option>Men Clothes</option>
            <option>Woman Clothes</option>
            <option>Health</option>
            <option>Fashion Item</option>
            <option>Household application</option>
            <option>Travel </option>
            <option>Phones </option>
            <option>Laptop,PC </option>
            <option>Gaming and Console </option>
            <option>Camera and Flycams </option>
            <option>Sport </option>
            <option>Hobbies </option>
            <option>Oto </option>
            <option>Motorbike </option>
          </select>

          <div className="form-group row"></div>
          <div className="form-group row"></div>
          <div className="form-group row"></div>
          <div className="form-group row"></div>
          <div className="form-group row"></div>
          <div className="form-group row"></div>
          <div className="form-group row"></div>
        </div>
      </div>
      <div className="shipping">

      </div>
    </div>
  );
};

export default AddProduct;
