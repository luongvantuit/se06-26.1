import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap";
import { NavLink } from "react-router-dom";
import "../../assets/css/Nav.css";

import carts from "../../assets/img/Cart.svg";

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
              <button className="btn btn-outline-success btn-search-nav" type="submit">
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
                <NavLink to="/Service" className="nav-link" href="#">
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
                <NavLink to="/" className="nav-link " href="#">
                  Orders
                </NavLink>
              </li>
              <li className="nav-item hidden-nav">
                <NavLink to="/SignInScreen" className="nav-link " href="#">
                  Sign In
                </NavLink>
              </li>
            </ul>
            <div className="icon order">
              <NavLink to="/Notifications">
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
              <NavLink to="/ShoppingCart">
                <img src={carts} alt="Cart" />
              </NavLink>
            </div>
            <div className="button">
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
        </div>
      </nav>
    </div>
  );
};

export default Header;
