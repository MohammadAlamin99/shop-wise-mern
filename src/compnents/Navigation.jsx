import React from 'react';
import logo from '../assets/images/navigation-img/logo_dark.png'
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { PiUserThin } from "react-icons/pi";
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
                        <div className="col-lg-4 inputArea">
                            <input type="text" placeholder='Search...'/>
                            <button>search</button>
                        </div>
                        <div className="col-lg-4 icon-right">
                            <a href="#"><PiUserThin /></a>
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