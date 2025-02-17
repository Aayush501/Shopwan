import React from 'react'
import Navbar from './Navbar'
import HomeContent from './HomeContent'
import Footer from './Footer'

const Home = () => {
    const homeStyle ={
        marginBottom: '10px'
    }
    return (
        <>
        <div style={homeStyle}>
            <Navbar></Navbar>
        </div>
        <div style={homeStyle} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <HomeContent></HomeContent>
        </div>
        <div style={homeStyle}>
            <Footer></Footer>
        </div>
        </>
    )
}

export default Home
