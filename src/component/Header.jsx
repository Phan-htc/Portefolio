import { React } from 'react';
import './Style/Header.css';
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

// ancrage avec une image pour affectation lien vers github, Linkedin, Malt, etc
// Bannière + titre


const header = () => {

    return (
        <div className='primary'> 
            <div className='Link'>
                <a href="https://www.linkedin.com/in/charlie-phan-542549196/">
                 <AiFillLinkedin/>Linkedin
                </a>
                <a href="phan-htc@outlook.fr">
                    <AiOutlineMail/>phan-htc@outlook.fr
                </a>
            </div>      
            <h1>Portefolio</h1> 
        </div>
    );
};

export default header;