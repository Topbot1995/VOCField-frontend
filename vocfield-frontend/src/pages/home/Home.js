import React, { useState } from 'react';
import Graph from '../../assets/graph.png';
import Audit from '../../assets/audit.png';
import WorkFlow1 from '../../assets/workflow1.png';
import WorkFlow2 from '../../assets/workflow2.png';
import Feature from '../../assets/feature.png';
import CheckIcon from '../../assets/checkIcon.png';
import logo from '../../assets/logo.png';
import './home.css';
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
const Home = () => {
    return (
        <div className='header'>
            <div className='header-content landing-page image-bg'>
                <div className='landing-title'>
                    <h1>VOC PROTOCOL</h1>
                    <p>The VOCYield protocol currently has $9876  of VOC earning 0.13% interest</p>
                </div>
                <div className='landing-mint'>
                    <div className='mint-box image-bg'>
                        <h1>VOC</h1>
                        <img src={Graph} />
                        <button className='mint-btn'>MINT</button>
                        <button className='trade-btn'>TRADE</button>
                    </div>
                </div>
            </div>
            <div className='header-content info-container'>
                <div className='info-title'>
                    <h1>Try VOCField</h1>
                    <p>Community-built interfaces integrating the protocol</p>
                </div>
                <div className='info-boxs'>
                    <div className='info-box'>
                        <img alt="icon" src={CheckIcon}/>
                        <h3>VOCYield Treasury</h3>
                        <p>Ths is Treasury feature box and you can use this</p>
                    </div>
                    <div className='info-box'>
                        <img alt="icon" src={CheckIcon} />
                        <h3>VOCYield Treasury</h3>
                        <p>Ths is Treasury feature box and you can use this</p>
                    </div>
                    <div className='info-box'>
                        <img alt="icon" src={CheckIcon} />
                        <h3>VOCYield Treasury</h3>
                        <p>Ths is Treasury feature box and you can use this</p>
                    </div>
                    <div className='info-box'>
                        <img alt="icon" src={CheckIcon} />
                        <h3>VOCYield Treasury</h3>
                        <p>Ths is Treasury feature box and you can use this</p>
                    </div>
                    <div className='info-box'>
                        <img alt="icon" src={CheckIcon} />
                        <h3>VOCYield Treasury</h3>
                        <p>Ths is Treasury feature box and you can use this</p>
                    </div>
                    <div className='info-box'>
                        <img alt="icon" src={CheckIcon} />
                        <h3>VOCYield Treasury</h3>
                        <p>Ths is Treasury feature box and you can use this</p>
                    </div>
                </div>
            </div>
            <div className='header-content audit-container'>
                <div className='audit-title'>
                    <h1>Audited and Verified</h1>
                    <p>The most secure protocol for money</p>
                </div>
                <img src={Audit} />
            </div>
            <div className='header-content feature-container'>
                <div className='feature-title'>
                    <h1>How does our protocol work</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                </div>
                <div className='img-container'>
                    <img src={WorkFlow1} />
                    <img src={WorkFlow2} />
                </div>
                <div className="mobile-container">
                    <div className='mobile-title'>
                        <h1>Both on desktop or mobile</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring</p>
                    </div>
                    <img src={Feature} />
                </div>
            </div>
            
        </div>
    )
}

export default Home;