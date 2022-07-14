import React from 'react';
import { useState, useEffect } from 'react';


function Tech(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | Tech"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>Tech Page</h1>
        </section>
    )
}

export default Tech;