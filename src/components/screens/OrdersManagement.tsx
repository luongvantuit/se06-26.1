import React from "react";
import SideNav from "../widgets/SideNav";
import "../../assets/css/order_management.css";
import { Order } from "../../Order";

const product = {
  name: "Earpods Bluetooth i12 TWS 5.0 wireless i12 with HIFI sound quality",
  category: "Technology",
  description:
    "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button and change it with appropriate styles ",
  imageUrl: {
    cover: "https://cf.shopee.vn/file/7556e874cf766f3cb340e632c684def1",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
  },
  brand: "No Brand",
  warrantyType: "None",
  price: 499000,
  saleOff: 69,
  stock: 999,
  skuCode: "EPXH121621VNA",
  weight: 500,
  parcelSize: {
    width: 5,
    length: 10,
    height: 5,
  },
  shippingType: "Fast",
  sale:1
};

const order1 = {
  product: product,
  customer: "lincoln@23",
  payment: product.price,
  status: "Delivered",
  action: "View details",
};

const order2 = {
  product: product,
  customer: "padspas@23",
  payment: product.price,
  status: "Cancelled",
  action: "View details",
};

const order3 = {
  product: product,
  customer: "ipqwen@23",
  payment: product.price,
  status: "Returned",
  action: "View details",
};
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">[Products]</th>
        <th scope="col">Customer</th>
        <th scope="col">Payment</th>
        <th scope="col">Status</th>
        <th scope="col">Shipment</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
  );
};

const OrderListItem = (props: { order: Order }) => {
  return (
    <tr style={{ backgroundColor: "#eee" }}>
      <td className="orderProduct d-flex align-items-center">
        <div className="orderProductImg">
          <img
            src={props.order.product.imageUrl.cover}
            alt={props.order.product.name}
            style={{ width: "64px", marginRight: "8px" }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-start">
          <p className="orderProductName text-align-left">
            {props.order.product.name}
          </p>
          <p className="skuCode">[{props.order.product.skuCode}]</p>
        </div>
      </td>
      <td>
        <a href="">{props.order.customer}</a>
      </td>
      <td>{props.order.payment}</td>
      <td>{props.order.status}</td>
      <td>{props.order.product.shippingType}</td>
      <td>
        <a href="">{props.order.action}</a>
      </td>
    </tr>
  );
};
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
        <div style={{ margin: "0 64px", paddingTop: "64px" }}>
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
              <div className="table-resposive-md">
                <table className="order-list-header table table-hover table-bordered mt-4">
                  <TableHeader></TableHeader>
                  <tbody className="ordersList">
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center pb-4">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">
                        <i className="fas fa-chevron-left"></i>
                      </span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>

                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="tab-pane fade"
              id="nav-delivered"
              role="tabpanel"
              aria-labelledby="nav-delivered-tab"
            >
              <div className="table-resposive-md">
                <table className="order-list-header table table-hover table-bordered mt-4">
                  <TableHeader></TableHeader>
                  <tbody className="ordersList">
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                    <OrderListItem order={order1}></OrderListItem>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-cancelled"
              role="tabpanel"
              aria-labelledby="nav-cancelled-tab"
            >
              <div className="table-resposive-md">
                <table className="order-list-header table table-hover table-bordered mt-4">
                  <TableHeader></TableHeader>
                  <tbody className="ordersList">
                    <OrderListItem order={order2}></OrderListItem>
                    <OrderListItem order={order2}></OrderListItem>
                    <OrderListItem order={order2}></OrderListItem>
                    <OrderListItem order={order2}></OrderListItem>
                    <OrderListItem order={order2}></OrderListItem>
                    <OrderListItem order={order2}></OrderListItem>
                    <OrderListItem order={order2}></OrderListItem>
                    <OrderListItem order={order2}></OrderListItem>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-returned"
              role="tabpanel"
              aria-labelledby="nav-returned-tab"
            >
              <div className="table-resposive-md">
                <table className="order-list-header table table-hover table-borderless mt-4">
                  <TableHeader></TableHeader>
                  <tbody className="ordersList">
                    <OrderListItem order={order3}></OrderListItem>
                    <OrderListItem order={order3}></OrderListItem>
                    <OrderListItem order={order3}></OrderListItem>
                    <OrderListItem order={order3}></OrderListItem>
                    <OrderListItem order={order3}></OrderListItem>
                    <OrderListItem order={order3}></OrderListItem>
                    <OrderListItem order={order3}></OrderListItem>
                    <OrderListItem order={order3}></OrderListItem>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="table-resposive-md"></div>
        </div>
      </div>
    </div>
  );
};

export default OrdersManagement;
