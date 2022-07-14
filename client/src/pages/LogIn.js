import React from 'react';
import { useState, useEffect } from 'react';


function LogIn(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | Log In"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>LogIn Page</h1>
        </section>
    )
}

export default LogIn;