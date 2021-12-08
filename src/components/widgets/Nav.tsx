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

import carts from '../../assets/img/Cart.svg'
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
                            <img src={order} alt="Orders" /> 
                        </NavLink>
                    </div>
                    <div className="icon cart">
                        <NavLink to='/ShoppingCart'>
                            <img src={carts} alt="Cart" />
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
