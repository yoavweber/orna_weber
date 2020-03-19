import React from 'react';
import {Link} from 'gatsby';
import logo from '../.././assets/logo.png';
import './nav.scss';



function Nav({children}){
    return(
        <div>
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
                    <Link to='contact'>
                        <li>צור קשר</li>
                    </Link>
                </ul>
            </nav>
            {children}
        </div>
    )
}


export default Nav;
