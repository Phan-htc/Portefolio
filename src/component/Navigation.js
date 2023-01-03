import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import ErrorBoundary from './ErrorBoundary';
import './Style/nav.css'

const Navigation = () => {
    return (
        <div>
            <ErrorBoundary default>
                <nav>
                <ul className="flex flex-row">
                    <NavLink to="/">
                        <li><AiFillHome/></li>
                    </NavLink>
                    <NavLink to="/MonCv">
                        <li>Mon CV</li>
                    </NavLink>
                    <NavLink to="/Competences">
                        <li>Compétences</li>
                    </NavLink>
                </ul>
                </nav>
                
                
            </ErrorBoundary>        
        </div>
    );
};

export default Navigation;