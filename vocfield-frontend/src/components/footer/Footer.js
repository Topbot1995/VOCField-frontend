import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import './footer.css';
const FooterLinks1 = () => (
    <div className='footer-block'>
        <a href='/home'>Home</a>
        <a href='/whitepaper'>WhitePaper</a>
        <a href='/uniswap'>UniSwap</a>
        <a href='/genesis-dapp'>Genesis DApp</a>
        <a href='/voc-dapp'>VOC DApp</a>
    </div>
);
const FooterLinks2 = () => (
    <div className='footer-block'>
        <a href='/instagram'>Instagram</a>
        <a href='/spotify'>Spotify</a>
        <a href='/facebook'>Facebook</a>
        <a href='/discord'>Discord</a>
    </div>
);
const FooterLinks3 = () => (
    <div className='footer-block'>
        <a href='/private-policy'>Private Policy</a>
        <a href='/terms'>Terms and Conditions</a>
        <a href='home'>Exchange and Return Policy</a>
    </div>
);
const FooterLinks4 = () => (
    <div className='footer-block'>
        <a href='/aboutus'>About Us</a>
        <a href='/contactus'>Contact Us</a>
        <a href='/blogs'>Blogs</a>
        <a href='/faq'>FAQ</a>
    </div>
);
const Footer = () => {
    return (
    <>
        <div className='header-content footer-container'>

            <FooterLinks1 />
            <FooterLinks2 />
            <img className="navbar-links_logo" src={logo} alt="logo" />
            <FooterLinks3 />
            <FooterLinks4 />

        </div>
        <div className='header-content footer-cap'>
            copyright 2021 all rights reserved
        </div>
    </>
    )
}

export default Footer;