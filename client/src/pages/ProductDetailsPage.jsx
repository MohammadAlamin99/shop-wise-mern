import React from 'react';
import ProductDetails from '../compnents/ProductDetails';
import Header from "../compnents/Header";
import Navigation from '../compnents/Navigation';
import Newslatter from './../compnents/Newslatter';
import Footer from './../compnents/Footer';

const ProductDetailsPage = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <ProductDetails/>
            <Newslatter/>
            <Footer/>
        </div>
    );
};

export default ProductDetailsPage;