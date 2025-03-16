import React from 'react';
import Order from '../compnents/Order';
import Navigation from '../compnents/Navigation';
import Footer from '../compnents/Footer';

const OrderCompletePage = () => {
    return (
        <div>
            <Navigation/>
            <Order/>
            <Footer/>
        </div>
    );
};

export default OrderCompletePage;