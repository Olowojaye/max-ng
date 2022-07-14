import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function NoPage(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | Error 404"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1 style={{color: "red", textAlign: "center"}}>Error 404</h1>
            <p style={{textAlign: "center"}}>No such page exists!</p>
            <Link to={'/'} >Return Home.</Link>
        </section>
    )
}

export default NoPage;