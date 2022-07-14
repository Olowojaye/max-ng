import React from 'react';
import { useState, useEffect } from 'react';


function Level300(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | 300 Level"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>Level300 Page</h1>
        </section>
    )
}

export default Level300;