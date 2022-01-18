import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
        <p><a href='#whatFulsivern'>What is Fulsivern?</a></p>
        <p><a href='#features'>Services</a></p>
        <p><a href='#about'>About</a></p>
        <p><a href='#contact'>Contact</a></p>
    </>
)

export const Navbar = () => {
    const [ toggleMenu, setToggleMenu ] = useState(false);

    return (
        <div className='fulsivern__navbar'>
            <div className='fulsivern__navbar-links'>
                <div className='fulsivern__navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='fulsivern__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='fulsivern__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='fulsivern__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='fulsivern__navbar-menu_container scale-up-center'>
                        <div className='fulsivern__navbar-menu_container-links'>
                            <Menu />
                            <div className='fulsivern__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar