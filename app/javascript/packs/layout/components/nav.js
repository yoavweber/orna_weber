import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import './nav.css'



function Nav(){
    return(
        <nav>
            <img src={logo} />
            <ul className="nav-links">
                <Link to= '/'>
                    <li>ראשי</li>
                </Link>
                <Link to='treatments'>
                    <li>טיפולים</li>
                </Link>
                <Link to='booking'>
                    <li>קביעת תור</li>
                </Link>
            </ul>
            <div className='nav'>
                <div className='decoration'>
                     <span/><span/><span/><span/>
                </div>
            </div>
        </nav>
    )
}


export default Nav;
