import React from "react";
import SideNav from "../widgets/SideNav";
import "bootstrap";
import AddImage from "../widgets/AddProduct.tsx/AddImage";
import ButtonGreen from "../widgets/ButtonGreen";
import "../../assets/css/add_product.css";
const AddProduct = () => {
  return (
    <div>
      <SideNav></SideNav>
      <div className="add_product">
        <div className="info">
          <h3>Sale Information</h3>
          <div className="form-group row">
            <label htmlFor="productName" className="col-sm-2 col-form-label">
              Product Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="productName"
                value=""
                placeholder="Enter product name"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="categories" className="col-sm-2 col-form-label">
              Category
            </label>
            <div className="col-sm-10">
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
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className=" col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                name="Description"
                id="description"
                className="form-control"
                rows={10}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className=" col-sm-2 col-form-label">Product Image</label>
            <div className="col-sm-10 d-flex flex-row align-items-center">
              <div className="d-flex align-items-center row" style={{marginTop:'0'}}>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
                <div className="col-3 col-md-2">
                  <AddImage></AddImage>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="categories" className="col-sm-2 col-form-label">
              Brand
            </label>
            <div className="col-sm-10">
              <select className="form-control" id="categories">
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand</option>
                <option>Brand </option>
                <option>Brand </option>
                <option>Brand</option>
                <option>Brand </option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="categories" className="col-sm-2 col-form-label">
              Warranty
            </label>
            <div className="col-sm-10">
              <select className="form-control" id="categories">
                <option>No warranty </option>
                <option>Shop warranty </option>
                <option>Brand warranty </option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price" className="col-sm-2 col-form-label">
              Price
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="price"
                value=""
                placeholder="Enter price"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="stock" className="col-sm-2 col-form-label">
              Stock
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="stock"
                value=""
                placeholder="Enter stock"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="skuCode" className="col-sm-2 col-form-label">
              SKU code
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="skuCode"
                value=""
                placeholder="Enter SKU code"
              ></input>
            </div>
          </div>
        </div>

        <div className="info" style={{marginTop:'64px'}}>
          <h3>Shipment Information</h3>

          <div className="form-group row">
            <label htmlFor="skuCode" className="col-sm-2 col-form-label">
              Weight
            </label>
            <div className="col-sm-10">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Weight(gr)"
                  aria-label="Weight(gr)"
                  aria-describedby="basic-addon2"
                ></input>
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    gr
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="skuCode" className="col-sm-2 col-form-label">
              Parcel size
            </label>
            <div className="col-sm-10">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="col-sm-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Width(gr)"
                      aria-label="Width(gr)"
                      aria-describedby="basic-addon2"
                    ></input>
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        gr
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Length(cm)"
                      aria-label="Length(cm)"
                      aria-describedby="basic-addon2"
                    ></input>
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        gr
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Height(cm)"
                      aria-label="Height(cm)"
                      aria-describedby="basic-addon2"
                    ></input>
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        gr
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-center mt-4"
          style={{
            marginLeft: "128px",
            marginRight: "128px",
            padding: "32px",
            marginTop: "64px",
          }}
        >
          <ButtonGreen name={"Submit"}></ButtonGreen>
          <ButtonGreen name={"Cancel"}></ButtonGreen>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
