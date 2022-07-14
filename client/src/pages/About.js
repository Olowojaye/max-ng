import React from 'react';
import { useState, useEffect } from 'react';


function About(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | About"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>About Page</h1>
        </section>
    )
}

export default About;