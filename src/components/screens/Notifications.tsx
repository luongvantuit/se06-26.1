import React from 'react'
import { NavLink } from 'react-router-dom'
import '..//../assets/css/notification.css'
import vouncher from '../../assets/img/notification/vouncher.png'
import backcoin from '../../assets/img/notification/backcoin.png'
export default function Notifications() {
    return (

        <div className="container-fluid row">
            <div className="sidebar col-2 col-lg-3">
                <div className="component d-flex">
                    <span className="fas fa-user component__icon" />
                    <a href="#" className="component__advance">My Account</a>
                </div>
                <div className="component d-flex">
                    <span className="fas fa-calendar component__icon" />
                    <a href="#" className="component__advance">My Purchase</a>
                </div>
                <div className="component d-flex">
                    <span className="fas fa-bell component__icon" />
                    <a href="#" className="component__advance">Notifications</a>
                </div>
                <div className="component d-flex">
                    <span className="fas fa-ticket component__icon" />
                    <a href="#" className="component__advance">My Vouncher</a>
                </div>
                <div className="component d-flex">
                    <span className="fab fa-btc component__icon" />
                    <a href="#" className="component__advance">My Shop Coins</a>
                </div>
            </div>
            <div className="main col-10 col-lg-9">
                <div className="wrap">
                    <div className="notification d-flex">
                        <img className="notification__image " src="./assets/image/image 34.jpg" alt="" />
                        <p className="notification__paragraph col-md-7 col-lg-9">datasfashion199 đã đánh giá đơn hàng 21126AVCXDTHBJ9. Vui lòng
                            đánh giá sản  phẩm trước ngày 14-12-2012. 21:28 29-11-2021</p>
                        <button className="btn notification__button">Xem chi tiết</button>
                    </div>
                    <div className="notification d-flex">
                        <img className="notification__image " src={vouncher} alt="" />
                        <p className="notification__paragraph col-xs-5 col-md-7 col-lg-9">Nóng hổi! Săn SIÊU VOUCHER trước giờ G <br />
                            ☄️ Loạt voucher giảm đến 212K
                            🔥 Mã hoàn đến 412K Xu
                            ⏰ Tung mới mỗi 30' từ 21H hôm nay
                            👉 Số lượng có hạn - Vào săn ngay!!</p>
                        <button className=" btn notification__button">Xem chi tiết</button>
                    </div>
                    <div className="notification d-flex">
                        <img className="notification__image " src="./assets/image/backcoin.png" alt="" />
                        <p className="notification__paragraph col-xs-5 col-md-7 col-lg-9">Hàng Hot đến rồi đây! Mau mở ví! <br />
                            💥💥 Voucher hoàn xu Xtra
                            🌈 Đã có sẵn trong kho voucher của bạn
                            ⏰ Hiệu lực: 0H 11/12/2021 - 23H59 17/12/2021 <br />
                            👉 Số lượng có hạn - Dùng ngay bạn nhé!</p>
                        <button className="btn notification__button">Xem chi tiết</button>
                    </div>
                    <div className="notification d-flex">
                        <img className="notification__image " src={backcoin} alt="" />
                        <p className="notification__paragraph col-xs-5 col-md-7 col-lg-9">Hàng Hot đến rồi đây! Mau mở ví! <br />
                            💥💥 Voucher hoàn xu Xtra
                            🌈 Đã có sẵn trong kho voucher của bạn
                            ⏰ Hiệu lực: 0H 11/12/2021 - 23H59 17/12/2021 <br />
                            👉 Số lượng có hạn - Dùng ngay bạn nhé!</p>
                        <button className="btn notification__button">Xem chi tiết</button>
                    </div>
                    <div className="notification d-flex">
                        <img className="notification__image " src={backcoin} alt="" />
                        <p className="notification__paragraph col-xs-5 col-md-7 col-lg-9">Hàng Hot đến rồi đây! Mau mở ví! <br />
                            💥💥 Voucher hoàn xu Xtra
                            🌈 Đã có sẵn trong kho voucher của bạn
                            ⏰ Hiệu lực: 0H 11/12/2021 - 23H59 17/12/2021 <br />
                            👉 Số lượng có hạn - Dùng ngay bạn nhé!</p>
                        <button className="btn notification__button">Xem chi tiết</button>
                    </div>
                    <div className="notification d-flex">
                        <img className="notification__image " src={backcoin} alt="" />
                        <p className="notification__paragraph col-xs-5 col-md-7 col-lg-9">Hàng Hot đến rồi đây! Mau mở ví! <br />
                            💥💥 Voucher hoàn xu Xtra
                            🌈 Đã có sẵn trong kho voucher của bạn
                            ⏰ Hiệu lực: 0H 11/12/2021 - 23H59 17/12/2021 <br />
                            👉 Số lượng có hạn - Dùng ngay bạn nhé!</p>
                        <button className="btn notification__button">Xem chi tiết</button>
                    </div>
                    <div className="notification d-flex">
                        <img className="notification__image " src={backcoin} alt="" />
                        <p className="notification__paragraph col-xs-5 col-md-7 col-lg-9">Hàng Hot đến rồi đây! Mau mở ví! <br />
                            💥💥 Voucher hoàn xu Xtra
                            🌈 Đã có sẵn trong kho voucher của bạn
                            ⏰ Hiệu lực: 0H 11/12/2021 - 23H59 17/12/2021 <br />
                            👉 Số lượng có hạn - Dùng ngay bạn nhé!</p>
                        <button className="btn notification__button">Xem chi tiết</button>
                    </div>
                    <div className="notification d-flex">
                        <img className="notification__image " src={backcoin} alt="" />
                        <p className="notification__paragraph col-xs-5 col-md-7 col-lg-9">Hàng Hot đến rồi đây! Mau mở ví! <br />
                            💥💥 Voucher hoàn xu Xtra
                            🌈 Đã có sẵn trong kho voucher của bạn
                            ⏰ Hiệu lực: 0H 11/12/2021 - 23H59 17/12/2021 <br />
                            👉 Số lượng có hạn - Dùng ngay bạn nhé!</p>
                        <button className="btn notification__button">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


