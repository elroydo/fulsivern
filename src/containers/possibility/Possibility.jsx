import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png';

export const Possibility = () => {
    return (
        <div className='fulsivern__possibility section__padding' id='possibility'>
            <div className='fulsivern__possibility-image'>
                <img src={possibility} alt='possibility' />
            </div>
            <div className='fulsivern__possibility-content'>
                <h4>Lorem ipsum dolor sit amet...</h4>
                <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h4>Lorem ipsum dolor sit amet...</h4>
            </div>
        </div>
    )
}

export default Possibility