import React from 'react';
import './styles/header.css';

const Header = () => {

  return (
    <div className="header">
      <div className="header-big"></div>
      <div className="header-little"></div>
      <div className="circle-container">
        <div className="circle circle-big"></div>
        <div className="circle circle-middle"></div>
        <div className="circle circle-little"></div>
      </div>
    </div>
  );
};

export default Header;
