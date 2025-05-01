import React from 'react';
import Navigation from '../compnents/Navigation';
import CollectionProudct from '../compnents/collection/CollectionProudct';
import Newslatter from './../compnents/Newslatter';
import Footer from '../compnents/Footer';
import Banner from '../compnents/collection/Banner';

const CollectionPage = () => {
    return (
        <div>
            <Navigation/>
            <Banner/>
            <CollectionProudct/>
            <Newslatter/>
            <Footer/>
        </div>
    );
};

export default CollectionPage;