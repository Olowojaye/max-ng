import React from 'react';
import { useState, useEffect } from 'react';


function ETesting(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | e-Testing"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>E-Testing Page</h1>
        </section>
    )
}

export default ETesting;