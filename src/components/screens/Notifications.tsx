import React from "react";
import image from "../../assets/img/notification/image.jpg";
import vouncher from "../../assets/img/notification/vouncher.png";
import backcoin from "../../assets/img/notification/backcoin.png";
import "..//../assets/css/notification.css";
import { UserNav } from "./User";
export const NotificationItem = () => {
  return (
    <div className="notification d-flex">
      <img className="notification__image " src={image} alt="" />
      <p className="notification__paragraph col-md-7 col-lg-8">
        datasfashion199 đã đánh giá đơn hàng 21126AVCXDTHBJ9. Vui lòng đánh giá
        sản phẩm trước ngày 14-12-2012. 21:28 29-11-2021
      </p>
      <button className="btn notification__button">Xem chi tiết</button>
    </div>
  );
};

export default function Notifications() {
  return (
    <div className="section__0 container-fluid row">
      <UserNav/>
      <div className="main col-10 col-lg-8">
        <div className="wrap">
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          <NotificationItem></NotificationItem>
          
        </div>
      </div>
    </div>
  );
}
