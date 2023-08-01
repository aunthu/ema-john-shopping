import React from 'react';
import './Header.css';
import logo from '../../../src/images/Logo.svg';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-menu' >
                <a href="/order">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;