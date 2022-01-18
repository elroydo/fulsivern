import React from 'react';
import { Article } from '../../components/';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

export const Blog = () => {
    return (
        <div className='fulsivern__blog section__padding' id='blog'>
            <div className='fulsivern__blog-heading'>
                <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            </div>
            <div className='fulsivern__blog-container'>
                <div className='fulsivern__blog-container_groupA'>
                    <Article imgURL={blog01} date='Jan 17, 2022' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                </div>
                <div className='fulsivern__blog-container_groupB'>
                    <Article imgURL={blog02} date='Jan 17, 2022' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                    <Article imgURL={blog03} date='Jan 17, 2022' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                    <Article imgURL={blog04} date='Jan 17, 2022' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                    <Article imgURL={blog05} date='Jan 17, 2022' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                </div>
            </div>
        </div>
    )
}

export default Blog