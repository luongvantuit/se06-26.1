import React from "react";
import '../../assets/css/payment.css'
import vietcom from '../../assets/img/payment/vietcom.png'
// import vietCap from '../../assets/img/payment/vietCap.png'
// import scb from '../../assets/img/payment/scb.png'
// import fe from '../../assets/img/payment/fe.png'
// import acb from '../../assets/img/payment/acb.png'
export default function Payment() {
    return (
        <div className=" container">
            <div className="payment__top row">
                <div className="shop__left col-2">
                    <h5 className="shop__left--title">Payment Methods</h5>
                </div>
                <div className="shop__right col-10">
                    <button className="shop__right--btn btn">Credit</button>
                    <button className="shop__right--btn btn">Payment On Delivery</button>
                </div>
            </div>
            <div className="payment__main row">
                <div className="shop__left col-2">
                    <h5 className="shop__left--title">Choose Card</h5>
                </div>
                <div className="shop__right col-10">
                    <button className="shop__right--btn btn"> <span className="far fa-plus shop__right--btn--icon" /> Other Cards</button>
                </div>
            </div>
            <div className="payment__bottom">
                <div className="shop__image">
                    <img className="shop__image--img" src={vietcom} alt="" />
                    <img className="shop__image--img" src={vietcom} alt="" />
                    <img className="shop__image--img" src={vietcom} alt="" />
                    <img className="shop__image--img" src={vietcom} alt="" />
                    <img className="shop__image--img" src={vietcom} alt="" />
                </div>
            </div>
            <div className="payment__method">
                <table className="tablePayment">
                    <tbody><tr className="tablePayment__collumn">
                        <td>Cash :</td>
                        <td className="tablePayment__collumn--right">2$</td>
                    </tr>
                        <tr className="tablePayment__collumn">
                            <td>Transport Fee :</td>
                            <td className="tablePayment__collumn--right">1$</td>
                        </tr>
                        <tr className="tablePayment__collumn">
                            <td> Total Money : </td>
                            <td className="tablePayment__collumn--right"> 3$</td>
                        </tr>
                    </tbody></table>
                <button className="buttonPayment btn ">Payment</button>
            </div>
        </div>
    );

}