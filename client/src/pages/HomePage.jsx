import React from "react";
import Header from "../compnents/header";
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

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <FeatureCollection />
      <Category/>
      <Discount/>
      <ShopCollection/>
      <Article/>
      <Newslatter/>
      <Instagram/>
    </div>
  );
};

export default HomePage;
