import { User } from "firebase/auth";
import React from "react";

const MyAccount = (user: User) => {
  return (
    <div className="my-account">
      <form action="">
        <h3 className="form-header">My profile</h3>
        <div className="line"></div>
        <div className="form-group row">
          <label
            htmlFor="productName"
            className="col-sm-2 col-form-label border-none"
          >
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="productName"
              value=""
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="productName" className="col-sm-2 col-form-label">
            Full Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="fullName"
              value="Name"
            ></input>
          </div>
        </div>

        <div className="form-group row">
          <label
            htmlFor="email"
            className="col-sm-2 col-form-label border-none"
          >
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              value=""
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="phoneNumber"
            className="col-sm-2 col-form-label border-none"
          >
            Phone Number
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value=""
            ></input>
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="shopName"
            className="col-sm-2 col-form-label border-none"
          >
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
        <div className="from-group row">
          <label
            htmlFor="shopName"
            className="col-sm-2 col-form-label border-none"
          >Sex</label>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            checked
          ></input>
          <label  htmlFor="btnradio1">
            Male
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          ></input>
          <label  htmlFor="btnradio2">
            Female
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
          ></input>
          <label  htmlFor="btnradio3">
            Other
          </label>
        </div>
        </div>
      </form>
    </div>
  );
};

export default MyAccount;