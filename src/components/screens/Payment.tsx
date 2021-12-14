import React from "react";
import '../../assets/css/payment.css'
import vietcom from '../../assets/img/payment/vietcom.png'
import vietCap from '../../assets/img/payment/vietCap.png'
import scb from '../../assets/img/payment/scb.png'
import fe from '../../assets/img/payment/fe.png'
import acb from '../../assets/img/payment/acb.png'
export default function Payment() {
    return (
        <div className=" container">
            <div className="payment__top row">
                <div className="shop__left col-2">
                    <h5 className="shop__left--title">Phương thức thanh toán</h5>
                </div>
                <div className="shop__right col-10">
                    <button className="shop__right--btn btn">Thẻ tín dụng/Ghi nợ</button>
                    <button className="shop__right--btn btn">Thanh toán khi nhận hàng</button>
                </div>
            </div>
            <div className="payment__main row">
                <div className="shop__left col-2">
                    <h5 className="shop__left--title">Chọn thẻ</h5>
                </div>
                <div className="shop__right col-10">
                    <button className="shop__right--btn btn"> <span className="far fa-plus shop__right--btn--icon" /> Thẻ khác</button>
                </div>
            </div>
            <div className="payment__bottom">
                <div className="shop__image">
                    <img className="shop__image--img" src={vietcom} alt="" />
                    <img className="shop__image--img" src={acb} alt="" />
                    <img className="shop__image--img" src={scb} alt="" />
                    <img className="shop__image--img" src={fe} alt="" />
                    <img className="shop__image--img" src={vietCap} alt="" />
                </div>
            </div>
            <div className="payment__method">
                <table className="tablePayment">
                    <tbody><tr className="tablePayment__collumn">
                        <td>Tổng tiền hàng :</td>
                        <td className="tablePayment__collumn--right">2$</td>
                    </tr>
                        <tr className="tablePayment__collumn">
                            <td>Phí vận chuyển :</td>
                            <td className="tablePayment__collumn--right">1$</td>
                        </tr>
                        <tr className="tablePayment__collumn">
                            <td> Tổng thanh toán : </td>
                            <td className="tablePayment__collumn--right"> 3$</td>
                        </tr>
                    </tbody></table>
                <button className="buttonPayment btn ">Thanh toán</button>
            </div>
        </div>
    );

}