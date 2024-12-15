import React from "react";
import Header from "../compnents/header";
import "../assets/css/bootstrap-grid.css";
import "../assets/css/common.css";
import "../assets/css/style.css";
import Navigation from "../compnents/Navigation";
import Banner from "../compnents/Banner";
import FeatureCollection from "../compnents/FeatureCollection";
import Category from "../compnents/Category";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <FeatureCollection />
      <Category/>
    </div>
  );
};

export default HomePage;
