import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MonCv from '../pages/MonCv';
import Competences from '../pages/Competences'

const Menu = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/MonCv" element={<MonCv />} />
                <Route path="/Competences" element={<Competences/>}/>
                </Routes> 
            </BrowserRouter> 
        </div>
    );
};

export default Menu;