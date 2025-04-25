import React from 'react';
import BlogList from '../compnents/blog/BlogList';
import Navigation from './../compnents/Navigation';
import BlogBanner from '../compnents/blog/BlogBanner';
import Footer from './../compnents/Footer';
import Newslatter from './../compnents/Newslatter';

const BlogPage = () => {
    return (
        <>
        <Navigation/>
        <BlogBanner/>
        <BlogList/> 
        <Newslatter/>
        <Footer/>  
        </>
    );
};

export default BlogPage;