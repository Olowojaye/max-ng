import React from 'react';
import { useState, useEffect } from 'react';


function Level100(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | 100 Level"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>100 Level Page</h1>
        </section>
    )
}

export default Level100;