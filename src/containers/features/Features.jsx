import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Loren ipsum: ichi',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Loren ipsum: ni',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Loren ipsum: san',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Loren ipsum: shi',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
]

export const Features = () => {
    return (
        <div className='fulsivern__features section__padding' id='features'>
            <div className='fulsivern__features-heading'>
                <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className='fulsivern__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Features