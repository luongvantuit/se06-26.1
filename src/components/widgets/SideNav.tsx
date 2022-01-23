import React from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/css/side_nav.css'
import { HashRouter} from "react-router-dom";

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
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Orders
            </button>
            <div className="collapse" id="orders-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a href="/myorders" className="link-dark rounded">
                    My Orders
                  </a>
                </li>
                <li>
                  <a href="myorders/cancelation" className="link-dark rounded">
                    Cancellation
                  </a>
                </li>
                <li>
                  <a href="myorders/return" className="link-dark rounded">
                    Returned/ Refunded
                  </a>
                </li><li>
                  <a href="myorders/delivered" className="link-dark rounded">
                    Delivered
                  </a>
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
                  <a href="/myproduct" className="link-dark rounded">
                    My products
                  </a>
                </li>
                <li>
                  <a href="/addproduct" className="link-dark rounded">
                    Add new products
                  </a>
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
                  <a href="/income" className="link-dark rounded">
                    My income
                  </a>
                </li>
                <li>
                  <a href="/balance" className="link-dark rounded">
                    My Balance
                  </a>
                </li>
                <li>
                  <a href="bankaccount" className="link-dark rounded">
                    Bank Account
                  </a>
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
