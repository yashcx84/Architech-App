import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav';
import RouterApp from './Router/RouterApp';

export default function App() {
    return (
        <BrowserRouter>
            <Nav />
            <RouterApp />
            <Footer />
        </BrowserRouter>
    );
}
