import React from 'react';
import { useState, useEffect } from 'react';
import './Home.css';


function Home(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | Home"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>Home Page</h1>
            <div className='test-div' />
            <div className='footer-cover' />
        </section>
    )
}

export default Home;