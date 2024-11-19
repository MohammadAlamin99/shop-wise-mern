import React from 'react';
import Header from '../compnents/header';
import'../assets/css/bootstrap-grid.css'
import'../assets/css/common.css'
import'../assets/css/style.css'
import Navigation from '../compnents/Navigation';


const HomePage = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
        </div>
    );
};

export default HomePage;