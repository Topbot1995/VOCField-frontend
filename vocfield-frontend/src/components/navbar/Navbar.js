import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import Instagram from '../../assets/instagram.png';
import Facebook from '../../assets/facebook.png';
import Frame from '../../assets/frame.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';



const Menu = () => {
    return (
        <>
            <a className="navbar-links" href="/"><p>Home</p></a>
            <a className="navbar-links" href="/whitepaper"><p>WhitePaper </p></a>
            <a className="navbar-links" href="/uniswap"><p>UniSwap</p></a>
            <a className="navbar-links" href="/genesis-dapp"><p>Genesis DApp</p></a>
            <a className="navbar-links" href="/voc-dapp"><p>VOC DApp</p></a>
            <a className="navbar-links" href="/information"><p>Information</p></a>
        </>
    )
}

const SocialIcons = () => (
    <>
        <img className="social-links" src={Instagram} alt="" />
        <img className="social-links" src={Facebook} alt="" />
        <img className="social-links" src={Frame} alt="" />
    </>
)

const Navbar = (Instagram) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <>
            <div className='navbar'>
                <div className="navbar-links_container">
                    <Menu />
                    <img className="navbar-links_logo" src={logo} alt="logo" />
                    <SocialIcons />
                </div>
                <div className="navbar-menu">
                    {toggleMenu ?
                        <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                </div>
            </div>
            {toggleMenu && (
                <div className="navbar-menu_container scale-up-center" >
                    <div className="navbar-menu_container-links">
                        <Menu />
                        <div>
                            <SocialIcons />
                        </div>
                    </div>
                </div>
            )}

        </>


    )
}

export default Navbar

