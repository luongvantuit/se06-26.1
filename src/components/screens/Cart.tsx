import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/cart.css";

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
  size: "",
  color: "",
  weight: 500,
  parcelSize: {
    width: 5,
    length: 10,
    height: 5,
  },
  shippingType: "Fast",
  sale: 1,
};
const listOrders = [
  {
    product: product,
    customer: "lincoln@23",
    payment: product.price,
    status: "Delivered",
    quantity: 1,
    action: "View details",
  },
  {
    product: product,
    customer: "padspas@23",
    payment: product.price,
    status: "Cancelled",
    quantity: 2,
    action: "View details",
  },
  {
    product: product,
    customer: "ipqwen@23",
    payment: product.price,
    status: "Returned",
    quantity: 2,
    action: "View details",
  },
];

export const CartFunction = () => {
  return (
    <div className="CartFunction container d-flex align-items-center ">
      <div className="row">
        <div className="checkAll d-flex align-items-center col-sm-7">
          <input type="checkbox" name="" id="checkAllCart" className="me-3" />
          <label htmlFor="checkAllCart" className="checkAllCart">
            Select All{" "}
          </label>
        </div>
        <div className="Cart-button d-flex col-sm-5">
          <div className="button__green">Delete</div>
          <div className="button__green">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export const CartFunctionFloat = () => {
    return (
      <div className="CartFunctionFloat container d-flex align-items-center ">
        <div className="row">
          <div className="checkAll d-flex align-items-center col-sm-7">
            <input type="checkbox" name="" id="checkAllCart" className="me-3" />
            <label htmlFor="checkAllCart" className="checkAllCart">
              Select All{" "}
            </label>
          </div>
          <div className="Cart-button d-flex col-sm-5">
            <div className="button__green">Delete</div>
            <div className="button__green">Buy Now</div>
          </div>
        </div>
      </div>
    );
  };

const CartItem = (props:any) => {
  return (
    <div className="Cart-item mt-5">
      <div className="order-header">
        <div className="shop  d-flex align-items-center">
          <p className="shop-name">SE06</p>
          <div className="view-shop d-flex align-items-center">
            <Link href="" to="/Shop">
              View Shop
            </Link>
          </div>
        </div>
      </div>
      <div className=" row">
        <div className="d-flex align-items-center overflow-hidden ">
          <div className="col-sm-1 d-flex align-items-center justify-content-center">
            <div className="form-group form-check ">
              <input
                type="checkbox"
                className="form-check-input"
                id="cardItemCheck"
                style={{ border: "1px solid #aaa" }}
              ></input>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="d-flex align-items-center justify-content-between">
              <div className="productImg">
                <img
                  src={props.order.product.imageUrl.cover}
                  alt={props.order.product.name}
                  width={72}
                  height={72}
                />
              </div>
              <div className="productName ms-3">{props.order.product.name}</div>
            </div>
          </div>
          <div className="col-sm-2 text-center">
            {props.order.product.price} vnd
          </div>
          <div className="col-sm-2 text-center">{props.order.quantity}</div>
          <div className="col-sm-2 text-center">
            {props.order.product.price * props.order.quantity} vnd
          </div>
          <div className="col-sm-1 text-center">Delete</div>
        </div>
      </div>
    </div>
  );
};
const Cart = () => {
  return (
    <div className="Cart">
      <div className="container" style={{ marginTop: "64px" }}>
        <div className="Cart-header d-flex align-items-center overflow-hidden ">
          <div className="col-sm-1 d-flex align-items-center justify-content-center">
            <div className="form-group form-check ">
              <input
                type="checkbox"
                className="form-check-input"
                id="cardItemCheck"
                style={{ border: "1px solid #aaa" }}
              ></input>
            </div>
          </div>
          <div className="col-sm-4">Product</div>
          <div className="col-sm-2 text-center">Price</div>
          <div className="col-sm-2 text-center">Quantity</div>
          <div className="col-sm-2 text-center">Total payment</div>
          <div className="col-sm-1 text-center">Action</div>
        </div>
        <CartItem order={listOrders[0]}></CartItem>
        <CartItem order={listOrders[0]}></CartItem>
        <CartItem order={listOrders[0]}></CartItem>
        <CartItem order={listOrders[0]}></CartItem>
        <CartItem order={listOrders[0]}></CartItem>
        <CartItem order={listOrders[0]}></CartItem>
        <CartItem order={listOrders[0]}></CartItem>
        <CartItem order={listOrders[0]}></CartItem>
      </div>

      <CartFunction></CartFunction>
      <CartFunctionFloat></CartFunctionFloat>
    </div>
  );
};

export default Cart;
