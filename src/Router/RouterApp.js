import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Services from '../View/Services'
import About from '../View/About'
import Work from '../View/Work'
import Home from '../View/Home'

export default function RouterApp() {
    return (
        <>
            <Routes>
                <Route path='/' Component={Home} />
                <Route path='/services' Component={Services} />
                <Route path='/about' Component={About} />
                <Route path='/work' Component={Work} />
            </Routes>
        </>
    )
}
