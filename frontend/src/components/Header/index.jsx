import React from 'react';

import Number from '../Number';
import Sort from '../Sort';
import logo from './logo.svg';

import './style.css';

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src={logo} alt='logo' />
                <p>PAKET GRECHI</p>
            </div>
            <div className='filters'>
                <Sort />
                <Number />
            </div>
        </header>
    )
}

export default Header;