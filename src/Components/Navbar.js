import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navList'>
                <li className='navItem'>
                    <Link to="/" className='navLink'>Home</Link>
                </li>
                <li className='navItem'>
                    <Link to="/about" className='navLink'>About</Link>
                </li>
            </ul>
        </nav>
    );
};



export default Navbar;
