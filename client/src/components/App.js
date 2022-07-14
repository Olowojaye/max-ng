import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
    return (
        <div className='App'>
            <NavBar />
            <Footer />
            <Outlet />
        </div>
    )
}

export default App;