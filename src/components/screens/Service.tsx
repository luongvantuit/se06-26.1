import React from "react"
import { NavLink } from "react-router-dom";
import '../../assets/css/service.css'

export default function Service() {
    return (
        <div className="container" style={{marginTop:'100px'}}>
      <div className="bread-crumbs">
        <NavLink to="/HomeScreen" className="nav-link active" aria-current="page" href="#"> Home </NavLink>
        <i className="fas fa-angle-right" />
        <a className="crumb1">Laptops</a>
      </div>
      <h4 className="category-name">Service</h4>
      <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className="nav-link active"
              id="nav-all-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-all"
              type="button"
              role="tab"
              aria-controls="nav-all"
              aria-selected="true"
            >
              All
            </button>
            <button
              className="nav-link"
              id="nav-delivered-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-delivered"
              type="button"
              role="tab"
              aria-controls="nav-delivered"
              aria-selected="false"
            >
              About Us
            </button>
            <button
              className="nav-link"
              id="nav-cancelled-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-cancelled"
              type="button"
              role="tab"
              aria-controls="nav-cancelled"
              aria-selected="false"
            >
              Delivered
            </button>
            <button
              className="nav-link"
              id="nav-return-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-returned"
              type="button"
              role="tab"
              aria-controls="nav-returned"
              aria-selected="false"
            >
              Customer opinions
            </button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active tab-service"
            id="nav-all"
            role="tabpanel"
            aria-labelledby="nav-all-tab"
          >
            <h1>Instructions for using the website</h1>
            <p>When accessing our website, customers must ensure that they are at least 18 years old, or access under the supervision of a parent or legal guardian. Customers ensure that they have all civil acts to perform goods purchase and sale transactions in accordance with current regulations of Vietnamese law
              We will issue an account (Account) to use so that customers can shop on our website within the stated Terms and Conditions of Use.
              will have to sign up for an account with your credentials and update if there are any changes. Each visitor is responsible for his or her own password, account and activity on the web. Furthermore, you must notify us when your account is accessed without authorization. 
              We do not accept any responsibility, directly or indirectly, for damage or loss caused by your failure to comply with the regulations.
              Use of any part of this website for commercial purposes or on behalf of any third party is strictly prohibited without our prior written permission. If we violate any of these, we will cancel the guest's account without notice.
              During the registration process, you agree to receive promotional emails from the website. If you do not wish to continue receiving mail, you may opt-out by clicking the link at the bottom of any promotional email.</p>
          </div>
          <div
            className="tab-pane fade tab-service"
            id="nav-delivered"
            role="tabpanel"
            aria-labelledby="nav-delivered-tab tab-service"
          >
            <h1>Instructions for using the website</h1>
            <p>Welcome to Tiki.</p>
            <p>When you visit our website, you agree to these terms. The Website reserves the right to change, modify, add or remove any part of these Terms of Sale, at any time. Changes are effective immediately upon posting on the website without prior notice. And when you continue to use the website, after changes to these Terms are posted, it means that you accept those changes.</p>
            <p>Please check back often to keep up to date with our changes.</p>
          </div>
          <div
            className="tab-pane fade tab-service"
            id="nav-cancelled"
            role="tabpanel"
            aria-labelledby="nav-cancelled-tab"
          >
            <h1>How do I exchange/return products due to missing/wrong products delivered</h1>
            <p>When receiving the wrong or missing product compared to the ordered order, please give feedback to Saga within 7 days from the time the order is delivered and the product needs to be guaranteed to be unused.</p>
            <p>In case, the return date is overdue due to supplier error or the order has a co-inspection record between the carrier and the customer, Saga will not agree to send compensation/exchange/return of the product in all conditions. To ensure the interests of customers and Saga has the basis to work with related departments, all requests for exchange/return/warranty you need to provide pictures/clips of defective products. Past the time to exchange / return products, if we have not received enough pictures / clips from you, Tiki would like to refuse to support.</p>
            <p>As soon as the product is received from the recalling partner, Saga will respond to the handling direction within 3 working days (excluding Saturday and Sunday).</p>
          </div>
          <div
            className="tab-pane fade  tab-service"
            id="nav-returned"
            role="tabpanel"
            aria-labelledby="nav-returned-tab"
          >
            <h1>Customer opinions</h1>
            <p>All website content and your comments are our property. If we detect any fake information, we will immediately lock your account or take other measures in accordance with Vietnamese law.</p>
            <h6>Accept orders and prices</h6>
            <p>We have the right to refuse or cancel your order for any reason related to technical error, system objectively at any time.In addition, to ensure fairness for customers who are end consumers of Saga, we will also refuse orders that are not for personal use, bulk purchases or for the purpose of purchasing. resell.
            We are committed to providing the most accurate price information to consumers. However, sometimes errors still occur, for example, when the product price is not displayed correctly on the website or the price is wrong, we will contact you for instructions or order cancellation on a case-by-case basis. that's for you. We also reserve the right to refuse or cancel any order whether or not it has been confirmed or paid for.</p>
          </div>
        </div>
        </div>
      );
}
