import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/css/side_nav.css'
import { NavLink ,HashRouter} from "react-router-dom";

const SideNav = () => {
  return (
    <div className="side-nav">
      <HashRouter>
      <div className="flex-shrink-0 p-3 bg-white" style={{width:'280px'}}>
        
        <ul className="list-unstyled ps-0">
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#shipping-collapse"
              aria-expanded="true"
            >
              Shipping
            </button>
            <div className="collapse show" id="shipping-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <NavLink to="#" className="link-dark rounded">
                    Shipping Management
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="link-dark rounded">
                      Shipping Settings
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <NavLink to="/OrdersManagement" className="link-dark rounded">
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="link-dark rounded">
                    Cancellation
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="link-dark rounded">
                    Returned/ Refunded
                  </NavLink>
                </li><li>
                  <NavLink to="#" className="link-dark rounded">
                    Delivered
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#products-collapse"
              aria-expanded="false"
            >
              Products
            </button>
            <div className="collapse" id="products-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <NavLink to="#" className="link-dark rounded">
                    My products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/AddProduct" className="link-dark rounded">
                    Add new products
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </li>
          
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#finance-collapse"
              aria-expanded="false"
            >
              Finance
            </button>
            <div className="collapse" id="finance-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <NavLink to="#" className="link-dark rounded">
                    My income
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="link-dark rounded">
                    My Balance
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="link-dark rounded">
                    Bank Account
                  </NavLink>
                </li>
                
              </ul>
              
            </div>
          </li>
          <li className="mb-1">
            <button
              className="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#analaysis-collapse"
              aria-expanded="false"
            >
              Analaysis
            </button>
            <div className="collapse" id="analaysis-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <NavLink to="#" className="link-dark rounded">
                    Business Analaysis
                  </NavLink>
                </li>
                                
              </ul>
              
            </div>
          </li>
        </ul>
      </div>
      <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
      </HashRouter>
      
    </div>
  );

};

export default SideNav;
