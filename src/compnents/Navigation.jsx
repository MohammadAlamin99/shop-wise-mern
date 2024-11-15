import React from 'react';
import logo from '../assets/images/navigation-img/logo_dark.png'
import { RiUser3Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
const Navigation = () => {
    return (
        <div>
            <section className='navigation'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="logoSite">
                                <a href="#"><img src={logo} alt="" /></a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <input type="text" />
                            <button>search</button>
                        </div>
                        <div className="col-lg-4">
                            <a href="#"><RiUser3Line /></a>
                            <a href="#"><CiHeart/></a>
                            <a href="#"><PiShoppingCartLight/></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Navigation;