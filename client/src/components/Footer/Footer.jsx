import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
//import Payment from "../../assets/products/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">SUBSCRIBE TO THE KEFYALLEN NEWSLETTER</div>
                    <div className="text">
                    By entering your email address below, you agree to receive our
                    newsletter that presents our latest collections, events and initiatives. You
                    will find more information about it.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: contact@kefyallen.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Long-coat</span>
                    <span className="text">Tie</span>
                    <span className="text">Shirt</span>
                    <span className="text">Pants</span>

                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                         © Copyright 2023 Kefyallen
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Footer;
