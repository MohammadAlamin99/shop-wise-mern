import React from 'react';
import OrderData from '../compnents/profile/OrderData';
import Navigation from '../compnents/Navigation';
import Footer from '../compnents/Footer';

const OrderPage = () => {
    return (
        <div>
            <Navigation/>
            <OrderData/>
            <Footer/>
        </div>
    );
};

export default OrderPage;