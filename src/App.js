import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav'
import RouterApp from './Router/RouterApp'
import Footer from './Footer'
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <RouterApp />
                <Footer />
            </BrowserRouter>
        </>
    )
}
