import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';

export const Footer = () => {
    return (
        <div className='fulsivern__footer section__padding'>
            <div className='fulsivern__footer-heading'>
                <h1 className='gradient__text'>Look into the void.</h1>
            </div>
            <div className='fulsivern__footer-btn'>
                <p>What do you see?</p>
            </div>

            <div className='fulsivern__footer-links'>
                <div className='fulsivern__footer-links_logo'>
                    <img src={logo} alt='logo' />
                    <p>Nowhere.</p>
                </div>
                <div className='fulsivern__footer-links_div'>
                    <h4>Links</h4>
                    <p>API.</p>
                    <p>Status</p>
                    <p>Security</p>
                </div>
                <div className='fulsivern__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                </div>
                <div className='fulsivern__footer-links_div'>
                    <h4>Contact</h4>
                    <p>Nowhere.</p>
                    <p>000-0000-0000</p>
                    <p>nowhere@mail.com</p>
                </div>
            </div>
            <div className='fulsivern__footer-copyright'>
                <p>© 2022 Copyright Fulsivern</p>
            </div>
        </div>
    )
}

export default Footer