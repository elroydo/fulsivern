import React from 'react';
import { RiMenu3Fill, RiMenuLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';

export const Navbar = () => {
    return (
        <div>
            <div className='fulsivern__navbar'>
                <div className='fulsivern__navbar-links'>
                    <div className='fulsivern__navbar-links_logo'>
                        <img src={logo} alt='logo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar