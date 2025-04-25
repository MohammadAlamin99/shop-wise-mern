import React from 'react';
import Navigation from './../Navigation';
import Banner from '../shop/Banner';
import Footer from '../Footer';
import CategoryCollection from './CategoryCollection';

const CategoryProduct = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <CategoryCollection/>
            <Footer/>
        </div>
    );
};

export default CategoryProduct;