import React from "react";
import Header from "../compnents/header";
import "../assets/css/bootstrap-grid.css";
import "../assets/css/common.css";
import "../assets/css/style.css";
import Navigation from "../compnents/Navigation";
import Banner from "../compnents/Banner";
import FeatureCollection from "../compnents/FeatureCollection";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <FeatureCollection />
    </div>
  );
};

export default HomePage;
