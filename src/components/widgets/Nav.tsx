import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBarItem } from 'typescript';
import '../widgets/Nav.css'

import { Navbar,Container,NavDropdown,  } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import '../widgets/Nav.css'

import 'bootstrap'
import { NavLink } from 'react-router-dom';
import '../../assets/css/Nav.css'

import cart from '../../assets/img/Cart.svg'
import order from '../../assets/img/Order.svg'


const Header = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink to='/HomeScreen' className="navbar-brand" href="#">

                    <div className="logo ">
                            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_620:2976)">
                                    <path d="M4.44336 3.77778L8.22114 0H23.3322L27.11 3.77778L19.5545 11.3333H11.9989L4.44336 3.77778Z" fill="#008254"/>
                                    <path d="M4.44379 3.77734L0.666016 7.55512L8.22157 30.2218L11.9993 11.3329L4.44379 3.77734Z" fill="#006642"/>
                                    <path d="M27.1102 3.77734L30.888 7.55512L23.3325 30.2218L19.5547 11.3329L27.1102 3.77734Z" fill="#006642"/>
                                    <path d="M8.2207 30.2219L11.9985 11.333H19.554L23.3318 30.2219H8.2207Z" fill="#81D6B8"/>
                                    <path d="M4.44336 3.77734L11.9989 11.3329L8.22114 30.2218L4.44336 3.77734Z" fill="#40AD87"/>
                                    <path d="M19.5547 11.3329L27.1102 3.77734L23.3325 30.2218L19.5547 11.3329Z" fill="#40AD87"/>
                                    <path d="M4.44336 3.77734L11.9989 11.3329H19.5545L27.11 3.77734L19.5545 15.1107H11.9989L4.44336 3.77734Z" fill="#006642"/>
                                    <path d="M4.44358 18.8887L2.55469 26.4442L8.22135 30.222L4.44358 18.8887Z" fill="#008254"/>
                                    <path d="M27.1098 18.8887L28.9987 26.4442L23.332 30.222L27.1098 18.8887Z" fill="#008254"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_620:2976">
                                <rect width="30.2222" height="30.2222" fill="white" transform="translate(0.666016)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        <div className="logo logo__text">
                            <h1>SE06</h1>
                        </div>
                    </div>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search for products" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <i className="fas fa-search"></i>
                    </form>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/HomeScreen' className="nav-link active" aria-current="page" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/ServiceScreen' className="nav-link" href="#">Customer Service</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink to='/ContactScreen' className="nav-link " href="#">Contact Us</NavLink>                            
                        </li>

                        <li className="nav-item hidden-nav">
                            <NavLink to='/' className="nav-link " href="#">Cart</NavLink>                            
                        </li>
                        <li className="nav-item hidden-nav">
                            <NavLink to='/' className="nav-link " href="#">Orders</NavLink>                            
                        </li>
                        <li className="nav-item hidden-nav">
                            <NavLink to='/SignInScreen' className="nav-link " href="#">Sign In</NavLink>                            
                        </li>           
                        
                    </ul>
                    <div className="icon order">
                        <NavLink to='/'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9814 2.33388C19.3802 2.33388 19.7034 2.66638 19.7034 3.07763V3.32613H23.7957C24.1639 3.32613 24.4677 3.61051 24.5127 3.97801L24.5177 4.07076V24.922C24.5177 25.3333 24.1953 25.6666 23.7965 25.6666H4.53847C4.13968 25.6666 3.81641 25.3341 3.81641 24.9229V4.07076C3.81641 3.65951 4.13968 3.32526 4.53847 3.32526H8.62986V3.07763C8.62986 2.69788 8.90562 2.38463 9.26198 2.33826L9.35277 2.33301L18.9814 2.33388ZM19.7034 9.03638C19.7034 9.44763 19.381 9.78013 18.9822 9.78013H16.0931C15.6943 9.78013 15.3711 9.44763 15.3711 9.03638C15.3711 8.34951 14.8323 7.79388 14.1679 7.79388C13.5027 7.79388 12.9639 8.34951 12.9639 9.03638C12.9639 9.44763 12.6415 9.78013 12.2427 9.78013H9.35362C8.95483 9.78013 8.63156 9.44763 8.63156 9.03638L8.63071 4.81538H5.26222V24.1774H23.0736V4.81626L19.7034 4.81538V9.03638ZM16.5454 14.4666C16.8271 14.1761 17.2844 14.1761 17.567 14.4666C17.8486 14.7571 17.8486 15.2288 17.567 15.5201L13.7148 19.4918C13.4331 19.7823 12.9766 19.7823 12.6941 19.4918L10.768 17.5055C10.4863 17.215 10.4863 16.7434 10.768 16.452C11.0506 16.1615 11.5079 16.1615 11.7896 16.452L13.2049 17.9115L16.5454 14.4666ZM18.2593 3.82313H10.0757V8.29088H11.6199C11.9339 7.14463 12.9554 6.30463 14.1679 6.30463C15.3796 6.30463 16.4011 7.14463 16.7159 8.29088H18.2602V3.82401L18.2593 3.82313Z" fill="black"/>
                            </svg>
                        </NavLink>
                    </div>
                    <div className="icon cart">
                        <NavLink to='/'>
                            <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_620:2995)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.21484C0 2.01904 0.0888948 1.83125 0.247129 1.6928C0.405362 1.55435 0.619974 1.47656 0.84375 1.47656H3.375C3.56321 1.47661 3.746 1.53171 3.8943 1.63311C4.0426 1.73452 4.14789 1.87639 4.19344 2.03618L4.87687 4.42969H24.4687C24.5935 4.42975 24.7167 4.45404 24.8295 4.50079C24.9423 4.54754 25.0418 4.61559 25.1209 4.70005C25.2 4.7845 25.2567 4.88325 25.2869 4.98919C25.3171 5.09512 25.3201 5.2056 25.2956 5.31267L23.6081 12.6955C23.5712 12.8565 23.474 13.0021 23.3319 13.1093C23.1898 13.2166 23.0109 13.2793 22.8234 13.2876L6.966 13.9845L7.45031 16.2422H21.9375C22.1613 16.2422 22.3759 16.32 22.5341 16.4584C22.6924 16.5969 22.7812 16.7847 22.7812 16.9805C22.7812 17.1763 22.6924 17.3641 22.5341 17.5025C22.3759 17.641 22.1613 17.7188 21.9375 17.7188H6.75C6.55329 17.7186 6.36283 17.6583 6.21154 17.5483C6.06024 17.4383 5.95763 17.2855 5.92144 17.1163L3.39187 5.32596L2.71687 2.95312H0.84375C0.619974 2.95312 0.405362 2.87534 0.247129 2.73689C0.0888948 2.59843 0 2.41065 0 2.21484ZM5.23462 5.90625L6.65212 12.5198L22.0826 11.842L23.4394 5.90625H5.23462ZM8.4375 17.7188C7.54239 17.7188 6.68395 18.0299 6.05101 18.5837C5.41808 19.1375 5.0625 19.8887 5.0625 20.6719C5.0625 21.4551 5.41808 22.2062 6.05101 22.76C6.68395 23.3139 7.54239 23.625 8.4375 23.625C9.33261 23.625 10.191 23.3139 10.824 22.76C11.4569 22.2062 11.8125 21.4551 11.8125 20.6719C11.8125 19.8887 11.4569 19.1375 10.824 18.5837C10.191 18.0299 9.33261 17.7188 8.4375 17.7188ZM20.25 17.7188C19.3549 17.7188 18.4964 18.0299 17.8635 18.5837C17.2306 19.1375 16.875 19.8887 16.875 20.6719C16.875 21.4551 17.2306 22.2062 17.8635 22.76C18.4964 23.3139 19.3549 23.625 20.25 23.625C21.1451 23.625 22.0035 23.3139 22.6365 22.76C23.2694 22.2062 23.625 21.4551 23.625 20.6719C23.625 19.8887 23.2694 19.1375 22.6365 18.5837C22.0035 18.0299 21.1451 17.7188 20.25 17.7188ZM8.4375 19.1953C7.98995 19.1953 7.56072 19.3509 7.24426 19.6278C6.92779 19.9047 6.75 20.2803 6.75 20.6719C6.75 21.0635 6.92779 21.4391 7.24426 21.716C7.56072 21.9929 7.98995 22.1484 8.4375 22.1484C8.88505 22.1484 9.31427 21.9929 9.63074 21.716C9.94721 21.4391 10.125 21.0635 10.125 20.6719C10.125 20.2803 9.94721 19.9047 9.63074 19.6278C9.31427 19.3509 8.88505 19.1953 8.4375 19.1953ZM20.25 19.1953C19.8024 19.1953 19.3732 19.3509 19.0568 19.6278C18.7403 19.9047 18.5625 20.2803 18.5625 20.6719C18.5625 21.0635 18.7403 21.4391 19.0568 21.716C19.3732 21.9929 19.8024 22.1484 20.25 22.1484C20.6976 22.1484 21.1268 21.9929 21.4432 21.716C21.7597 21.4391 21.9375 21.0635 21.9375 20.6719C21.9375 20.2803 21.7597 19.9047 21.4432 19.6278C21.1268 19.3509 20.6976 19.1953 20.25 19.1953Z" fill="#272727"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_620:2995">
                                <rect width="27" height="23.625" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </NavLink> 
                        
                    </div>
                    <div className="button">
                        <div className="btn-signin">
                            <NavLink to='/SignInScreen'>
                                <button>
                                    Sign In                                
                                </button>
                            </NavLink>
                            
                        </div>
                        <div className="btn-signup">
                            <NavLink to='/SignUpScreen'>
                                <button>
                                    Sign Up
                                </button>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
            
            
        </div>
    )
}

export default Header
