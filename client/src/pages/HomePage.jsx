import React from "react";

import "../assets/css/bootstrap-grid.css";
import "../assets/css/common.css";
import "../assets/css/style.css";
import Navigation from "../compnents/Navigation";
import Banner from "../compnents/Banner";
import FeatureCollection from "../compnents/FeatureCollection";
import Category from "../compnents/Category";
import Discount from "../compnents/Discount";
import ShopCollection from "../compnents/ShopCollection";
import Article from "../compnents/Article";
import Newslatter from "../compnents/Newslatter";
import Instagram from "../compnents/Instagram";
import Footer from "../compnents/Footer";
import Header from "../compnents/Header";

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Navigation />
      <Banner />
      <FeatureCollection />
      <Category/>
      <Discount/>
      <ShopCollection/>
      <Article/>
      <Newslatter/>
      <Instagram/>
      <Footer/>
    </div>
  );
};

export default HomePage;
