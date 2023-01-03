import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer'
import Menu from './component/Menu';
import './style/App.css'

const App = () => {
  return (
    <div>
        <Header/>
        <Menu/>
        <Footer/>
    </div>
  );
};

export default App;