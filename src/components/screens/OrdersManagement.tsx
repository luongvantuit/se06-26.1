import React from "react";
import SideNav from "../widgets/SideNav";
import "../../assets/css/order_management.css";
import OrderListHeader from '../widgets/OrdersManagement/OrderListHeader'
import OrderListItem from '../widgets/OrdersManagement/OrderListItem'
const OrdersManagement = () => {
  return (
    <div>
      <div
        style={{
          marginTop: "64px",
          marginLeft: "280px",
          backgroundColor: "#eee",
        }}
      >
        <SideNav></SideNav>
        <div  style={{margin:'0 64px', paddingTop:'64px'}}>
          <h2>My Orders</h2>
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
                Delivered
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
                Cancelled
              </button>
              <button
                className="nav-link"
                id="nav-return-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-return"
                type="button"
                role="tab"
                aria-controls="nav-return"
                aria-selected="false"
              >
                Retunred/Refund
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-all"
              role="tabpanel"
              aria-labelledby="nav-all-tab"
            >
              <h1>All products</h1>
            </div>
            <div
              className="tab-pane fade"
              id="nav-delivered"
              role="tabpanel"
              aria-labelledby="nav-delivered-tab"
            >
              <h1>Delivered Orders</h1>
            </div>
            <div
              className="tab-pane fade"
              id="nav-cancelled"
              role="tabpanel"
              aria-labelledby="nav-cancelled-tab"
            >
              <h1>Cancelled Orders</h1>
            </div>
            <div
              className="tab-pane fade"
              id="nav-returned"
              role="tabpanel"
              aria-labelledby="nav-returned-tab"
            >
              <h1>Cancelled Orders</h1>
            </div>
          </div>
          <OrderListHeader></OrderListHeader>
          <tbody className="ordersList">
            {/* <OrderListItem></OrderListItem> */}
          </tbody>
        </div>
      </div>
    </div>
  );
};

export default OrdersManagement;
