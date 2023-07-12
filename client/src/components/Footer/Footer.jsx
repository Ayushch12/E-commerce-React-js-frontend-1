import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
//import Payment from "../../assets/products/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">ABONNEZ-VOUS À LA NEWSLETTER KEFYALLEN</div>
                    <div className="text">
                    En saisissant votre adresse e-mail ci-dessous, vous acceptez de recevoir nos
    newsletter qui présente nos dernières collections, événements et initiatives. Vous trouverez plus d'informations à ce sujet.
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
                    <span className="text">Accueil</span>
                    <span className="text">A Propos</span>
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
