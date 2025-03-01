import React, { useState } from 'react'
import Navbar from '../topOfThePage/Navbar'
import HomeContent from './HomeContent'
import Footer from '../Footer'
import UserCart from './UserCart'
import UserWishList from './UserWishList'

const Home = () => {
    const homeStyle ={
        marginBottom: '10px'
    }

    const [cart, setCart] = useState(false);

    const [wishlist, setwishlist] = useState(false);
    const wishlistItems = [];
    
    return (
        <>
        <div style={homeStyle}>
            <Navbar cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setwishlist}></Navbar>
        </div>
        <div style={homeStyle} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            {!cart && !wishlist? <HomeContent></HomeContent> :cart? <UserCart cartItems={cartItems} cart={cart} setCart={setCart}></UserCart> : <UserWishList wishlistItems={wishlistItems} wishlist={wishlist} setWishlist={setwishlist}></UserWishList>}
        </div>
        <div style={homeStyle}>
            <Footer></Footer>
        </div>
        </>
    )
}

export default Home
