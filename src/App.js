import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from './Nav'
import RouterApp from './Router/RouterApp'
export default function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <RouterApp />
            </BrowserRouter>
        </>
    )
}
