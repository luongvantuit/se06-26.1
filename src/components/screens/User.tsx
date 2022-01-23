import React from "react";
import "../../assets/css/user.css";
import Notifications from "./Notifications";
import Seller from "./Seller";
import UserOrder from "./UserOrder";

export const UserDisplay = (props: {
  width: number;
  height: number;
  imageUrl: string;
  displayName: string;
}) => {
  return (
    <div className="user d-flex align-items-center justify-content-center">
      <div
        className="userImg"
        style={{
          border: "none",
          backgroundImage: `url('${props.imageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          borderRadius: "50%",
          width: `${props.width}px`,
          height: `${props.height}px`,
        }}
      ></div>
      <div
        className="userDisplayName"
        style={{ fontSize: "14px", marginLeft: "8px", textDecoration: "none" }}
      >
        {props.displayName}
      </div>
    </div>
  );
};
export function UserNav() {
  return (
    <div className="user-nav" style={{ width: "280px" }}>
      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="my-account-tab"
            data-bs-toggle="pill"
            data-bs-target="#my-account"
            type="button"
            role="tab"
            aria-controls="my-account"
            aria-selected="true"
          >
            User Account
          </button>
          <button
            className="nav-link"
            id="notifications-tab"
            data-bs-toggle="pill"
            data-bs-target="#notifications"
            type="button"
            role="tab"
            aria-controls="notifications"
            aria-selected="false"
          >
            Notifications
          </button>
          <button
            className="nav-link"
            id="user-orders-tab"
            data-bs-toggle="pill"
            data-bs-target="#user-orders"
            type="button"
            role="tab"
            aria-controls="user-orders"
            aria-selected="false"
          >
            Orders
          </button>
          <button
            className="nav-link"
            id="my-shop-tab"
            data-bs-toggle="pill"
            data-bs-target="#my-shop"
            type="button"
            role="tab"
            aria-controls="my-shop"
            aria-selected="false"
          >
            My Shop
          </button>
        </div>
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="my-account"
            role="tabpanel"
            aria-labelledby="my-account-tab"
          >
            {/* <MyAccount></MyAccount> */}
          </div>
          <div
            className="tab-pane fade"
            id="notifications"
            role="tabpanel"
            aria-labelledby="notifications-tab"
          >
            <Notifications></Notifications>
          </div>
          <div
            className="tab-pane fade"
            id="user-orders"
            role="tabpanel"
            aria-labelledby="user-orders-tab"
          >
            <UserOrder></UserOrder>
          </div>
          <div
            className="tab-pane fade"
            id="my-shop"
            role="tabpanel"
            aria-labelledby="my-shop-tab"
          >
            <Seller></Seller>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function User() {
  return (
    <div className="User">
      <UserNav></UserNav>
    </div>
  );
}
