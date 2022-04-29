import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import './Footer.css';

const Footer = () => {
    return (
        <div className='container'>
            <div className="footer-section">
                <div className='text-center className="icons" footer-container'>
                    <div>
                        <div>
                            <h3>Visit Us</h3>
                            <p>2355 30th Street </p>
                            <p>Boulder, CO 80301</p>
                            <p>(303) 440-1002</p>
                            <p>Bike Shop Hours & Directions</p>
                            <p>Cafe & Bar Hours</p>
                        </div>
                        <div className='media'>
                            <img src="https://www.sefiles.net/merchant/6360/images/site/full-cycle-footer-logo-color.svg" alt="" />
                            <a href="#"><span className="icons"><BsFacebook></BsFacebook></span></a>
                            <a href="#"><span className="icon"><AiFillInstagram></AiFillInstagram></span></a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Shop</h3>
                            <p>Bikes</p>
                            <p>Apparel</p>
                            <p>Accessories</p>
                            <p>Components</p>
                            <p>Triathlon</p>
                        </div>
                        <div className='media'>
                            <img src="https://www.sefiles.net/merchant/6360/images/site/cms-footer-logo-color.svg" alt="" />
                            <a href="#"><span className="icons"><BsFacebook></BsFacebook></span></a>
                            <a href="#"><span className="icon"><AiFillInstagram></AiFillInstagram></span></a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Resources</h3>
                            <p>About Full Bikes</p>
                            <p>Join Our Team</p>
                            <p>Shipping & Return Policies</p>
                            <p>Billing Terms & Conditions</p>
                            <p>Your Account</p>
                        </div>
                        <div className='media'>
                            <img src="https://www.sefiles.net/merchant/6360/images/site/tune-up-header-logo-color.svg" alt="" />
                            <a href="#"><span className="icons"><BsFacebook></BsFacebook></span></a>
                            <a href="#"><span className="icon"><AiFillInstagram></AiFillInstagram></span></a>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='text-center mt-5 text-white'>© 2022 Full Cycle  •  Privacy  •  Accessibility</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;