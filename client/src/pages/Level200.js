import React from 'react';
import { useState, useEffect } from 'react';


function Level200(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | 200 Level"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>Level200 Page</h1>
        </section>
    )
}

export default Level200;