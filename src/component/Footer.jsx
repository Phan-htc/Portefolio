import React from 'react';
import './Style/Footer.css'
import { GiPositionMarker } from 'react-icons/gi'
import { IoCallOutline } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <div class="main">
            <div class="presentation">
                <h2>Développeur Web</h2>
                <p>Développeur Web front & back-end, je suis à votre disposition pour répondre à tout type 
                    de projets de création de sites internet, de développement spécifique ou d'application web.
                    <br/>
                    Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins 
                    dans divers domaines.</p>
            </div>
            <div class="contact">
                <h2>PHAN Charlie</h2>
                <GiPositionMarker/>
                <div> 32 Avenue Léon Blum <br/>
                    31500 Toulouse</div>
                <IoCallOutline/>
                <span>06 18 97 69 18</span>
                <AiOutlineMail/>
                <span>phan-htc@outlook.fr</span>

            </div>
        </div>
    );
};

export default Footer;