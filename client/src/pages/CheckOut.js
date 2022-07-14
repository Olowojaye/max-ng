import React from 'react';
import { useState, useEffect } from 'react';


function CheckOut(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | CheckOut"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>CheckOut Page</h1>
        </section>
    )
}

export default CheckOut;