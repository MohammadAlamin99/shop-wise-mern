import React from 'react';
import Wishlist from '../compnents/profile/Wishlist';
import Navigation from '../compnents/Navigation';
import Footer from '../compnents/Footer';

const WishlistPage = () => {
    return (
        <div>
            <Navigation/>
            <Wishlist/>
            <Footer/>
        </div>
    );
};

export default WishlistPage;