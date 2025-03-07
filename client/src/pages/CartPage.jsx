import React from 'react';
import CartDetails from '../compnents/CartDetails';
import Header from '../compnents/Header';
import Navigation from '../compnents/Navigation';
import Footer from '../compnents/Footer';

const CartPage = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <CartDetails/>
            <Footer/>
        </div>
    );
};

export default CartPage;