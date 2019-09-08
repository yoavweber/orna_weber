import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../.././assets/logo.png';
import './nav.scss';



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
                <Link to='about'>
                    <li>עלינו</li>
                </Link>
                <Link to='Contact'>
                    <li>צור קשר</li>
                </Link>
            </ul>
        </nav>
    )
}


export default Nav;
