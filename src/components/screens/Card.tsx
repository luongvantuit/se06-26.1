import React from 'react'
import '../../assets/css/card.css'
import hinh1 from '../../assets/img/card/hinh1.svg'
import hinh2 from '../../assets/img/card/hinh2.svg'
import hinh3 from '../../assets/img/card/hinh3.svg'


export default function Card() {
    return (
        <div>
            <div id='main-card'>
                <div className='container hearder-green'>
                    <div className='nen'>
                        <nav aria-label="breadcrumb-card">
                                <li className="breadcrumb-card  mb-5 mt-4" >
                                    <div className="breadcrumb-card-item"><a href="#">Home</a><i className="fas fa-chevron-right"></i><a href="#">Wallet</a></div>
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
            
        </div>


        
    )
}
