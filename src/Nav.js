import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'

function Nav(){

    const navStyle = {
        color: 'white'
    }

    return(
        <nav>
            <Link style={navStyle} to='/'>
            <h2>
                Logo
            </h2>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/inputdetials'>
                <li>InputDetials</li>
                </Link>
                <Link style={navStyle} to='/about'>
                <li>About</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}


export default Nav;
