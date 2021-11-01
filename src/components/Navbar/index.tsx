import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { 
    NavBtn, 
    NavBtnLink, 
    NavMenu,
    NavLink,
    SearchBar,
    SearchInput,
    Search,
    Bars,
    Cart,
    Logo,
    LogoText,
    Nav } from './NavbarElements';
import { FaSearch } from 'react-icons/fa';
import Home from '../../pages/index'
import Service from '../../pages/Service'
import Contact from '../../pages/Contact'

const Navbar = () => {
    return (
        <div>
            <Nav>
                <Logo className='logo'>
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
                    <LogoText>SE06</LogoText>
                </Logo>

                <SearchBar>
                    <SearchInput type='text' placeholder='Search for products'/>
                    <Search>
                        <FaSearch></FaSearch>
                    </Search>
                </SearchBar>
                <Bars></Bars>
                <NavMenu>
                    <NavLink to='/Home' >Home</NavLink>
                    <NavLink to='/Service' >Customer Service</NavLink>
                    <NavLink to='/Contact' >Contact</NavLink>
                    
                </NavMenu>

                <NavMenu>
                    <NavLink to='order'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='33' height='32' viewBox='0 0 33 32'> <path fill='#000' d='M22.372 2.667c.47 0 .851.38.851.85v.284h4.823c.434 0 .792.325.845.745l.006.106v23.83c0 .47-.38.851-.85.851H5.35c-.47 0-.851-.38-.851-.85V4.652c0-.47.381-.852.851-.852h4.822v-.283c0-.434.325-.792.745-.845l.107-.006zm.851 7.66c0 .47-.38.85-.85.85h-3.405c-.47 0-.851-.38-.851-.85 0-.785-.635-1.42-1.418-1.42-.784 0-1.419.635-1.419 1.42 0 .47-.38.85-.85.85h-3.405c-.47 0-.851-.38-.851-.85l-.001-4.824h-3.97v22.128h20.992V5.504l-3.972-.001zm-3.722 6.206c.332-.332.871-.332 1.204 0 .332.332.332.871 0 1.204l-4.54 4.539c-.332.332-.87.332-1.203 0l-2.27-2.27c-.332-.332-.332-.871 0-1.204.333-.332.872-.332 1.204 0l1.668 1.668zm2.02-12.164h-9.645v5.106h1.82c.37-1.31 1.574-2.27 3.003-2.27 1.428 0 2.632.96 3.003 2.27h1.82V4.37z'/></svg> 
                    </NavLink>
                    <NavLink to='cart'>
                        <Cart></Cart>
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to ='/Sign-In'className='login-btn'>Sign In</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to='/Sign-Up'className="signup-btn">Sign Up</NavBtnLink>
                    </NavBtn>

                    

                </NavMenu>
            </Nav>
        </div>
    )
}

export default Navbar
