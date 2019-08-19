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
            {/* <h3>
                Logo
            </h3> */}
            <img src="http://www.thedemocompany.com/wp-content/uploads/2017/03/asset-32.png" alt="logo" width="80" height="80"></img>
            </Link>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                <li>Home</li>
                </Link>
                <Link style={navStyle} to='/inputdetials'>
                <li>InputDetials</li>
                </Link>
                <Link style={navStyle} to='/about'>
                <li>About</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                <li>Shop</li>
                </Link>
                <Link style={navStyle} to='/products'>
                <li>All Products</li>
                </Link>
            </ul>
        </nav>
    );
}


export default Nav;
