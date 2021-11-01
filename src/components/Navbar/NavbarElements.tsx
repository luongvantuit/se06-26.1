import React from 'react';
import { NavLink as Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        
    }
    body {
        display: block;
        margin: 0px;
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');
        
    }
    #root{
        margin:0 auto;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;


export const Nav = styled.nav`
    background:#fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: auto;
    filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
    padding: 0 32px;

    
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoText = styled.h1`
    color: #40AD87;
    
    font-size: 24;
    font-weight: bold;
    padding-left: 12px;
`;
export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-size: 18px;
    text-overflow: clip;
    &.active{
        color: #fff;
        background-color: #40AD87;
    }
    &:hover {
        color: #fff;
        background-color: #40AD87;
        text-decoration: none;
    }
    
`;
export const SearchBar = styled.div`
    display: block;
    position: relative;
    margin: 0 24px;
    width: 686px;

    @media (max-width: 768px) {
        display: none;
    }

    @media (max-width: 1024px){
        width: 300px;
    }
`;
export const SearchInput = styled.input`
    background-color: #eee;
    width: 100%;
    border-radius: 12px;
    color: #ccc;
    height: 36px;
    padding: 0 12px;
    border:  none;
    outline: none;
    
    &:focus{
        color: #000;
    }
    


`;

export const Search = styled(FaSearch)`
    color: #272626;
    /* padding: 0 12px; */
    float: right;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;

`;

export const Cart = styled(FaShoppingCart)`
    font-size: 24px;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #000;
      @media (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }

    @media (max-width: 1024px){
        display: block;
    }
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 1024px){
        display: none;
    }
    @media (max-width: 768px) {
        display: none;
    }
    
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
  max-height: 32px;


    @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #E3FAF2;
  padding: 10px 22px;
  color: #40AD87;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &.active {
      background-color: #40AD87;
      color: #fff;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #40AD87;
    color: #fff;
    text-decoration: none;
  }
`;

