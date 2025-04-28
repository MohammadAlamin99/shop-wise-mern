import React from 'react';
import BlogDetails from '../compnents/blog/BlogDetails';
import Footer from '../compnents/Footer';
import Navigation from '../compnents/Navigation';

const BlogDetailsPage = () => {
    return (
        <>
            <Navigation/>
            <BlogDetails/>
            <Footer/>
        </>
    );
};

export default BlogDetailsPage;