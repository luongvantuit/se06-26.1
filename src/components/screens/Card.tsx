import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/card.css'
import hinh1 from '../../assets/img/card/hinh1.svg'
import hinh2 from '../../assets/img/card/hinh2.svg'
import hinh3 from '../../assets/img/card/hinh3.svg'
import payment1 from '../../assets/img/payment-methods/light/payment1.svg'
import payment2 from '../../assets/img/payment-methods/light/payment2.svg'
import payment3 from '../../assets/img/payment-methods/light/payment3.svg'
import payment4 from '../../assets/img/payment-methods/light/payment4.svg'
import payment5 from '../../assets/img/payment-methods/light/payment5.svg'

export default function Card() {
    return (
        <div>
            <div id='main-card'>
                <div className='container'>
                    <div className='nen'>
                        <nav aria-label="breadcrumb-card">
                                <li className="breadcrumb-card  mb-5 mt-4" >
                                    <div className="breadcrumb-card-item"><a href="#">Home</a><i className="fas fa-chevron-right"></i><a href="#" className='a'>Wallet</a></div>
                                </li>
                        </nav>
                        <div className='surplus'>
                            <div className='surplus-left'>
                                <button className='surplus-button'>surplus:<span>2000$</span></button>
                            </div>
                            <div className='surplus-right'>
                                <button className='surplus-button d-flex'>
                                    <i className="fal fa-wallet"></i>
                                    <p>recharge</p>
                                </button>
                            </div>
                            
                        </div>
                    </div>


                </div>

                <div className='body'>
                    <div id='body'>
                        <div className='bank'>
                            <div className='bank-left d-flex'>
                                <i className="fas fa-credit-card"></i>
                                <p>Bank account</p>
                            </div>
                            <div className='bank-right d-flex'>
                                <i className="fas fa-landmark"></i>
                                <p>Dong A bank NH TMCP Dong A</p>
                            </div>
                        </div>

                        <div className='recent'>
                            <div className='recent-left'>
                                <p>Recent transactions</p>
                            </div>
                            <div className='recent-right  d-flex'>
                                <i className="far fa-list-ul"></i>
                                <p>Transaction history</p>
                            </div>
                        </div>

                        <div className='history-date'>
                                <p>22/12/2021</p>
                        </div>
                        <div className='history'>
            
                            <div className='history-1 d-flex'>
                                <div className='img col-2 col-xl-2 col-lg-2'>
                                    <img src={hinh1} alt="" />
                                </div>
                                <div className='gioithieu col-8 col-xl-8 col-lg-8'>
                                    <div>
                                        <p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM,</p>
                                        <p> 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                                    </div>
                                    <div className="star d-flex">
                                        <span className="fa fa-star checked checked1" />
                                        <span className="fa fa-star checked checked2" />
                                        <span className="fa fa-star checked checked3" />
                                        <span className="fa fa-star checked checked4" />
                                        <span className="fa fa-star checked checked5" />
                                        <p><a>Reviews (4)</a></p>
                                    </div>
                                </div>
                                <div className='money col-2 col-xl-2 col-lg-2'>
                                    <p>-4349$</p>
                                </div>
                            </div>
                        </div>


                        <div className='history-date'>
                                <p>11/11/2021</p>
                        </div>
                        <div className='history'>
                            
                            <div className='history-1 d-flex'>
                                <div className='img col-2'>
                                    <img src={hinh2} alt="" />
                                </div>
                                <div className='gioithieu col-8 col-8'>
                                    <div>
                                        <p>Earpods Bluetooth i12 TWS 5.0 wireless i12 with HIFI sound quality</p>
                                    </div>
                                    <div className="star d-flex">
                                        <span className="fa fa-star checked checked1" />
                                        <span className="fa fa-star checked checked2" />
                                        <span className="fa fa-star checked checked3" />
                                        <span className="fa fa-star checked checked4" />
                                        <span className="fa fa-star checked checked5" />
                                        <p><a>Reviews (4)</a></p>
                                    </div>
                                </div>
                                <div className='money col-2'>
                                    <p>-299$</p>
                                </div>
                            </div>
                        </div>


                        <div className='history-date'>
                                <p>22/10/2021</p>
                        </div>
                        <div className='history'>
                            
                            <div className='history-1 d-flex'>
                                <div className='img col-2'>
                                    <img src={hinh3} alt="" />
                                </div>
                                <div className='gioithieu col-8'>
                                    <div>
                                        <p>PHOERA 30ml Foundation Liquid Full Coverage 24HR Matte Oil Control Concealer</p>
                                    </div>
                                    <div className="star d-flex">
                                        <span className="fa fa-star checked checked1" />
                                        <span className="fa fa-star checked checked2" />
                                        <span className="fa fa-star checked checked3" />
                                        <span className="fa fa-star checked checked4" />
                                        <span className="fa fa-star checked checked5" />
                                        <p><a>Reviews (4)</a></p>
                                    </div>
                                </div>
                                <div className='money col-2'>
                                    <p>-499$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
            <div>
            <div className="footer pt-5">
                <div className="container">
                    <div className="row subscription display-flex justify-content-center align-items-center ">
                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <h3>Subscribe To Our Lastest Deal, Products,...</h3>
                        </div>
                        <div className="col-lg-5 col-md-12 col-sm-12">
                            <div className="row display-flex justify-content-center align-items-center">
                                <div className="col-9 col-sm-8">
                                    <input type="email" className="email-input" placeholder="Your email"></input>
                                </div>
                                <div className="col-3 col-sm-4">
                                    <button type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row category">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <p className="category__header">New Arrivals</p>
                                    <ul className="category__list">
                                        <li className="list-item">
                                            <a href="#">Laptops</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">PCs</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Funiture</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Beauty</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Clothes</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Baby</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="category__header">New Arrivals</p>
                                    <ul className="category__list">
                                        <li className="list-item">
                                            <a href="#">Laptops</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">PCs</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Funiture</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Beauty</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Clothes</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Baby</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="category__header">New Arrivals</p>
                                    <ul className="category__list">
                                        <li className="list-item">
                                            <a href="#">Laptops</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">PCs</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Funiture</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Beauty</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Clothes</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Baby</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <p className="category__header">New Arrivals</p>
                                    <ul className="category__list">
                                        <li className="list-item">
                                            <a href="#">Laptops</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">PCs</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Funiture</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Beauty</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Clothes</a>
                                        </li>
                                        <li className="list-item">
                                            <a href="#">Baby</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <p className="category__header">Address</p>
                            <ul className="category__list">
                                <li className="list-item">
                                    Address : <span>1234 Street Adress City Address, 1234</span>
                                </li>
                                <li className="list-item">
                                    Phones : <span>(00) 1234 5678</span>
                                </li>
                                <li className="list-item">
                                    E-mail : <span>se06@email.com</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row socials">
                        <div className="container">
                            <div className="socials-group text-white">
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="payment align-items-center">
                                <div className="brand">
                                    <img src={payment1} alt="" />
                                </div>
                                <div className="brand">
                                   <img src={payment2} alt="" />
                                </div>
                                <div className="brand">
                                    <img src={payment3} alt="" />
                                </div>
                                <div className="brand">
                                    <img src={payment4} alt="" />
                                </div>
                                <div className="brand">
                                    <img src={payment5} alt="" />
                                </div>
                            </div>
                            <div className="copyright mb-0  text-center">
                                <p>Copyright <i className="far fa-copyright"></i> 2021 SE06 Co Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>

        
    )
}
