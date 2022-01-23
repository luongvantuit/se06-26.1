import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/create_shop.css";
import { AddImage } from "../screens/AddProduct";
const CreateShop = () => {
  return (
    <div className="create-shop" id="createShop">
      <div className="shop-infomation" id="info">
        <h3 className="">Shop Infomation</h3>
        <form>
          <div className="form-group row">
            <label htmlFor="shopName" className="col-sm-2 col-form-label">
              Shop Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="shopName"
                value=""
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="address"
                placeholder="Address"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={"your_email@se.com"}
                readOnly
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Phone number
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
                placeholder="Phone number"
              ></input>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Verification Code
            </label>
            <div className="col-sm-2">
              <input
                type="password"
                className="form-control"
                id="email"
                placeholder="6 digits"
              ></input>
            </div>
          </div>
          <AddImage></AddImage>
        </form>
        <div className="actionBtn d-flex align-items-center">
          <div className="button__green " ><NavLink to='/Seller' href="#" className="text-decoration-none text-white">Next</NavLink></div>
          <div className="button__outlined" style={{margin:'16px'}}>Save</div>
        </div>
      </div>

    </div>
  );
};

export default CreateShop;
