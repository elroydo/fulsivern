import React from 'react';
import { Feature } from '../../components';
import './whatFulsivern.css';

export const WhatFulsivern = () => {
    return (
        <div className='fulsivern__whatFulsivern section__margin' id='whatFulsivern'>
            <div className='fulsivern__whatFulsivern-feature'>
                <Feature title='Loren ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
            </div>
            <div className='fulsivern__whatFulsivern-heading'>
                <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className='fulsivern__whatFulsivern-container'>
                <Feature title='Loren ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                <Feature title='Loren ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
                <Feature title='Loren ipsum' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
            </div>
        </div>
    )
}

export default WhatFulsivern