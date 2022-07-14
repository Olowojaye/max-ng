import React from 'react';
import { useState, useEffect } from 'react';


function SignUp(props) {
    useEffect(() => {
        document.title = "Max Engineering Tutorials | SignUp"
    }, []);

    return (
        <section className={`page-container ${props.className}`}>
            <h1>SignUp Page</h1>
        </section>
    )
}

export default SignUp;