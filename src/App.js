import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatFulsivern } from './containers';
import { Article, Brand, CTA, Feautre, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatFulsivern />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App