import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap";
import { NavLink } from "react-router-dom";
import "../../assets/css/Nav.css";

import carts from "../../assets/img/Cart.svg";
import { UserDisplay } from "../screens/User";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/HomeScreen" className="navbar-brand" href="#">
            <div className="logo ">
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_620:2976)">
                  <path
                    d="M4.44336 3.77778L8.22114 0H23.3322L27.11 3.77778L19.5545 11.3333H11.9989L4.44336 3.77778Z"
                    fill="#008254"
                  />
                  <path
                    d="M4.44379 3.77734L0.666016 7.55512L8.22157 30.2218L11.9993 11.3329L4.44379 3.77734Z"
                    fill="#006642"
                  />
                  <path
                    d="M27.1102 3.77734L30.888 7.55512L23.3325 30.2218L19.5547 11.3329L27.1102 3.77734Z"
                    fill="#006642"
                  />
                  <path
                    d="M8.2207 30.2219L11.9985 11.333H19.554L23.3318 30.2219H8.2207Z"
                    fill="#81D6B8"
                  />
                  <path
                    d="M4.44336 3.77734L11.9989 11.3329L8.22114 30.2218L4.44336 3.77734Z"
                    fill="#40AD87"
                  />
                  <path
                    d="M19.5547 11.3329L27.1102 3.77734L23.3325 30.2218L19.5547 11.3329Z"
                    fill="#40AD87"
                  />
                  <path
                    d="M4.44336 3.77734L11.9989 11.3329H19.5545L27.11 3.77734L19.5545 15.1107H11.9989L4.44336 3.77734Z"
                    fill="#006642"
                  />
                  <path
                    d="M4.44358 18.8887L2.55469 26.4442L8.22135 30.222L4.44358 18.8887Z"
                    fill="#008254"
                  />
                  <path
                    d="M27.1098 18.8887L28.9987 26.4442L23.332 30.222L27.1098 18.8887Z"
                    fill="#008254"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_620:2976">
                    <rect
                      width="30.2222"
                      height="30.2222"
                      fill="white"
                      transform="translate(0.666016)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="logo logo__text">
                <h1>SE06</h1>
              </div>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
              ></input>
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <i className="fas fa-search"></i>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/HomeScreen"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ServiceScreen" className="nav-link" href="#">
                  Customer Service
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/ContactScreen" className="nav-link " href="#">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item hidden-nav">
                <NavLink to="/Cart" className="nav-link " href="#">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item hidden-nav">
                <NavLink to="/UserOrder" className="nav-link " href="#">
                  Orders
                </NavLink>
              </li>
              <li className="nav-item hidden-nav">
                <NavLink to="/User" className="nav-link " href="#">
                  My Account
                </NavLink>
              </li>
              <li className="nav-item hidden-nav">
                <NavLink to="/SignInScreen" className="nav-link " href="#">
                  Sign In
                </NavLink>
              </li>
            </ul>

            <div className="button d-none">
              <div className="btn-signin">
                <NavLink to="/SignInScreen">
                  <button>Sign In</button>
                </NavLink>
              </div>
              <div className="btn-signup">
                <NavLink to="/SignUpScreen">
                  <button>Sign Up</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="icon order">
            <NavLink to="/UserOrder">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9814 2.33388C19.3802 2.33388 19.7034 2.66638 19.7034 3.07763V3.32613H23.7957C24.1639 3.32613 24.4677 3.61051 24.5127 3.97801L24.5177 4.07076V24.922C24.5177 25.3333 24.1953 25.6666 23.7965 25.6666H4.53847C4.13968 25.6666 3.81641 25.3341 3.81641 24.9229V4.07076C3.81641 3.65951 4.13968 3.32526 4.53847 3.32526H8.62986V3.07763C8.62986 2.69788 8.90562 2.38463 9.26198 2.33826L9.35277 2.33301L18.9814 2.33388ZM19.7034 9.03638C19.7034 9.44763 19.381 9.78013 18.9822 9.78013H16.0931C15.6943 9.78013 15.3711 9.44763 15.3711 9.03638C15.3711 8.34951 14.8323 7.79388 14.1679 7.79388C13.5027 7.79388 12.9639 8.34951 12.9639 9.03638C12.9639 9.44763 12.6415 9.78013 12.2427 9.78013H9.35362C8.95483 9.78013 8.63156 9.44763 8.63156 9.03638L8.63071 4.81538H5.26222V24.1774H23.0736V4.81626L19.7034 4.81538V9.03638ZM16.5454 14.4666C16.8271 14.1761 17.2844 14.1761 17.567 14.4666C17.8486 14.7571 17.8486 15.2288 17.567 15.5201L13.7148 19.4918C13.4331 19.7823 12.9766 19.7823 12.6941 19.4918L10.768 17.5055C10.4863 17.215 10.4863 16.7434 10.768 16.452C11.0506 16.1615 11.5079 16.1615 11.7896 16.452L13.2049 17.9115L16.5454 14.4666ZM18.2593 3.82313H10.0757V8.29088H11.6199C11.9339 7.14463 12.9554 6.30463 14.1679 6.30463C15.3796 6.30463 16.4011 7.14463 16.7159 8.29088H18.2602V3.82401L18.2593 3.82313Z"
                  fill="black"
                />
              </svg>
              {/* <img src={order} alt="Orders" />  */}
            </NavLink>
          </div>
          <div className="icon cart">
            <NavLink to="/Cart">
              <img src={carts} alt="Cart" />
            </NavLink>
          </div>
          <div className="btn-group">
            <div
              className="btn dropdown"
              
              id="defaultDropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              <NavLink to="/User" className="text-black text-decoration-none">
                <UserDisplay
                  width={32}
                  height={32}
                  imageUrl={
                    "data:image/jpeg;base64,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"
                  }
                  displayName={"Name"}
                ></UserDisplay>
              </NavLink>
            </div>
            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  My Account
                </a>
              </li>
              <li>
                <NavLink to='/Notifications' className="dropdown-item" href="#">
                  Notifications
                </NavLink>
              </li>
              <li>
                <NavLink to='/UserOrder' className="dropdown-item" href="#">
                  My Orders
                </NavLink>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
