import React from 'react';
import { useState, useEffect } from 'react';


function Books(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | Books"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>Books Page</h1>
        </section>
    )
}

export default Books;