import React from 'react';
import Banner from '../compnents/shop/Banner';
import Header from '../compnents/Header';
import Navigation from '../compnents/Navigation';
import Collection from '../compnents/shop/Collection';

const ShopPage = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <Banner/>
            <Collection/>
        </div>
    );
};

export default ShopPage;