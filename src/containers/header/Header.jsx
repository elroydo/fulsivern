import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

export const Header = () => {
    return (
        <div className='fulsivern__header section__padding' id='home'>
            <div className='fulsivern__header-content'>
                <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at risus viverra adipiscing. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Phasellus egestas tellus rutrum tellus. Nisi lacus sed viverra tellus in.</p>
                <div className='fulsivern__header-content__input'>
                    <input type='email' placeholder='Your Email Address'></input>
                    <button type='button'>Get Started</button>
                </div>
                <div className='fulsivern__header-content__people'>
                    <img src={people} alt='people' />
                    <p>1,666+ people requested a visitin the last 24 hours</p>
                </div>
            </div>
            <div className='fulsivern__header-image'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    )
}

export default Header