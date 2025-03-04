import React from "react";
import Banner from "../compnents/shop/Banner";
import Header from "../compnents/Header";
import Navigation from "../compnents/Navigation";
import Collection from "../compnents/shop/Collection";
import Newslatter from "./../compnents/Newslatter";
import Footer from "./../compnents/Footer";
import CartDrawer from "../compnents/CartDrawer";

const ShopPage = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Collection />
      <Newslatter />
      <Footer />
    </div>
  );
};

export default ShopPage;
