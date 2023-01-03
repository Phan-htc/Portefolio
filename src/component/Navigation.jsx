import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { GiSkills } from 'react-icons/gi'
import ErrorBoundary from './ErrorBoundary';
import './Style/nav.css'

const Navigation = () => {
    return (
        <div>
            <ErrorBoundary default>
                <nav>
                <ul>
                    <NavLink to="/">
                        <li><AiFillHome/></li>
                    </NavLink>
                    <NavLink to="/MonCv">
                        <li>Mon CV</li>
                    </NavLink>
                    <NavLink to="/Competences">
                        <li><GiSkills/>Compétences</li>
                    </NavLink>
                    <NavLink to="/Snake">
                        <li>Snake</li>
                    </NavLink>
                </ul>
                </nav>
                
            </ErrorBoundary>        
        </div>
    );
};

export default Navigation;