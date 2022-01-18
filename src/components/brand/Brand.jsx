import React from 'react';
import './brand.css';
import { google, slack, dropbox } from './imports';

export const Brand = () => {
    return (
        <div className='fulsivern__brand section__padding'>
            <div>
                <img src={google} alt='google' />
            </div>
            <div>
                <img src={slack} alt='slack' />
            </div>
            <div>
                <img src={dropbox} alt='dropbox' />
            </div>
        </div>
    )
}

export default Brand