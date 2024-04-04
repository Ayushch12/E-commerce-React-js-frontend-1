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
                    <div className="title">Catégories</div>
                    <span className="text">Long manteau</span>
                    <span className="text">Cravate</span>
                    <span className="text">Chemise</span>
                    <span className="text">Pantalon</span>

                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Accueil</span>
                    <span className="text">A Propos</span>
                    <span className="text">politique de confidentialité</span>
                    <span className="text">Termes et conditions</span>
                    <span className="text">Contactez-nous</span>
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
