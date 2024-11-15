import React from 'react';
import { IoLogoAndroid } from "react-icons/io";
import { FaWindows } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <header className='header-section'>
                <div className="container">
                    <div className="row">
                       <div className="col-lg-12 header-col">
                           <div className="left-text">
                                <p className='topbarText'>Free Ground Shipping Over $250 <span>|</span></p>
                                <span className='topbarText'> Download App</span>
                                <div className="BrandIcon">
                                    <a href="#" className='apple-icon'><FaApple/></a>
                                    <a href="#" className='android-icon'><IoLogoAndroid /></a>
                                    <a href="#" className='windows-icon'><FaWindows/></a>
                                </div>
                           </div>
                       </div>

                    </div>
                </div>
           </header>
        </>
    );
};

export default Header;