import React from 'react';
import './styles/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__big"></div>
            <div className="footer__little"></div>
            <div className="footer__circle-cont">
                <div className="footer__circle-cont__big"></div>
                <div className="footer__circle-cont__middle"></div>
                <div className="footer__circle-cont__little"></div>
            </div>
        </div>
    );
};

export default Footer;