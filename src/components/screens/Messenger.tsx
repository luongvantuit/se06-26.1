import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/messenger.css'
import payment1 from '../../assets/img/payment-methods/light/payment1.svg'
import payment2 from '../../assets/img/payment-methods/light/payment2.svg'
import payment3 from '../../assets/img/payment-methods/light/payment3.svg'
import payment4 from '../../assets/img/payment-methods/light/payment4.svg'
import payment5 from '../../assets/img/payment-methods/light/payment5.svg'
import person1 from '../../assets/img/mes/person1.png'
import person2 from '../../assets/img/mes/person2.png'
import person3 from '../../assets/img/mes/person3.png'

export default function Messenger() {
    return (
        <div>
            <div id='main-mess'>
                <div className="directShop container-fluid row">
                    <div className="section__left col-3">
                        <div className="direct">
                            <div className="direct__nav d-flex">
                                <div className="direct__nav--search ">

                                    <div className="search-box">
                                        <input type="text" placeholder="Search"></input>
                                        <label htmlFor="check" className="icon">
                                            <i className="fas fa-search" ></i>
                                        </label>
                                    </div>
                                </div>
                                <i className="fal fa-ellipsis-h " id='icon'></i>
                            </div>


                            <div className="direct__main">
                                <div className="direct__main--component a d-flex">
                                    <img src={person2} alt="" />
                                    <p className="component__paragraph col-6">DATA'S FASHION</p>
                                    <p className="component__time col-3">11:04</p>
                                </div>
                                <div className="direct__main--component d-flex">
                                    <img src={person1} alt="" />
                                    <p className="component__paragraph col-6">Lily Ash</p>
                                    <p className="component__time col-3">Thu</p>
                                </div>
                                <div className="direct__main--component d-flex">
                                    <img src={person3} alt="" />
                                    <p className="component__paragraph col-6">Tyler Bird</p>
                                    <p className="component__time col-3">We</p>
                                </div>

                            </div>
                            <div className="direct__bot">
                                <div className="direct__bot-left">
                                    <i className="fas fa-bell" id='chuong'></i>
                                    <p>Notifications</p>
                                </div>
                                <div className="direct__bot-right">
                                    <i className="fal fa-user-friends"></i>
                                    <p>Contacts</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="section__right col-9">
                        <div className="shop">
                            <div className="shop__online d-flex">
                                <div className="shop__online--circle"></div>
                                <p className="shop__online--name">DATA'S FASHION</p>
                                <span className="far fa-cog "></span>

                            </div>
                            <div className="shop__mess">
                                <div className="userLeft d-flex  col-12 col-md-7">
                                    <img className="userLeft-img" src={person2} alt="" />
                                    <div className="userLeft-wrap">
                                        <p className="wrap__time">10:16</p>
                                        <p className="wrap__paragraph">Chào bạn Nguyễn Thị Huế DATA’s FASHION cảm ơn bạn đã quan tâm và ủng
                                            hộ shop</p>

                                    </div>
                                </div>
                                <div className="userRight  ">
                                    <p className="userRight__time">10:45</p>
                                    <p className="userRight__paragraph"> Dạ shop cho mình hỏi về sản phẩm bên shop.</p>
                                </div>
                                <div className="userLeft d-flex col-12 col-md-7">
                                    <img className="userLeft-img" src={person2} alt="" />
                                    <div className="userLeft-wrap">
                                        <p className="wrap__time">11:04</p>
                                        <p className="wrap__paragraph">Dạ sản phẩm bên mình có đủ các size S M L cân nặng phù hợp các size
                                            shop mình để bên dưới rồi ạ.</p>

                                    </div>
                                </div>
                                <div className="userRight ">
                                    <p className="userRight__time">12:47</p>
                                    <p className="userRight__paragraph"> dạ vâng mình cảm ơn shop. </p>
                                </div>
                                <div className="userLeft d-flex col-12 col-md-7">
                                    <img className="userLeft-img" src={person2} alt="" />
                                    <div className="userLeft-wrap">
                                        <p className="wrap__time">12:48</p>
                                        <p className="wrap__paragraph">Dạ vâng shop cảm ơn bạn nha!</p>

                                    </div>
                                </div>


                            </div>
                            <div className="shop__chat">
                                <div className="shop__chat--mess">
                                    <input type="text " className="mess__input">

                                    </input>
                                    <div className="mess__icon--left">
                                            <i className="far fa-smile"></i>
                                            <i className="fas fa-camera"></i>
                                            <i className="far fa-paperclip"></i>
                                            <i className="fal fa-microphone"></i>
                                            <i className="far fa-ellipsis-h"></i>

                                            <div className="mess__icon--right">
                                                <i className="far fa-paper-plane"></i>
                                            </div>
                                        </div>


                                </div>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
