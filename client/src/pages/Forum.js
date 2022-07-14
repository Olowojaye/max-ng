import React from 'react';
import { useState, useEffect } from 'react';


function Forum(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | Forum"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>Forum Page</h1>
        </section>
    )
}

export default Forum;