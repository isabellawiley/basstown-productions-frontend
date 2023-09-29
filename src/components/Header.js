import { Link } from "react-router-dom";
import '../styling/header.css';
import { useState } from "react";
import Logo from "./images/Logo";
function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuClick(val){
        setMenuOpen(val);
        let body = document.querySelector('body');
        if(!menuOpen){
            body.classList.add('fixed-pos');
        }
        else {
            body.classList.remove('fixed-pos');
        }
    }

    return(
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            <button className="menu-button" onClick={() => handleMenuClick(!menuOpen)}>{menuOpen ? "CLOSE" : "MENU"}</button>
            {/* <button className={menuOpen ? "menu-button" : "menu-button close"} onClick={() => handleMenuClick(!menuOpen)}></button> */}
            <div className={menuOpen ? "menu show" : "menu close"}>
                <div className="left"></div>
                <div className="right"></div>
                <ul>
                    <li>
                        <Link to="/" onClick={() => handleMenuClick(false)}>HOME</Link>
                    </li>
                    <li>
                        <Link to="about" onClick={() => handleMenuClick(false)}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="services" onClick={() => handleMenuClick(false)}>SERVICES</Link>
                    </li>
                    <li>
                        <Link to="productions" onClick={() => handleMenuClick(false)}>PRODUCTIONS</Link>
                    </li>
                    <li>
                        <Link to="faq" onClick={() => handleMenuClick(false)}>FAQ</Link>
                    </li>
                    <li>
                        <Link to="contact" onClick={() => handleMenuClick(false)}>CONTACT</Link>
                    </li>
                </ul>
            </div>
            {/* <div className={menuOpen ? "menu show" : "menu"}>
                <ul>
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="services">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="productions">PRODUCTIONS</Link>
                    </li>
                    <li>
                        <Link to="faq">FAQ</Link>
                    </li>
                    <li>
                        <Link to="contact">CONTACT</Link>
                    </li>
                </ul>
            </div> */}
        </div>
    )
}

export default Header;

// <polygon id="polygon-elton-john" points="1280 0, 1280 0, 1280 577, 1280 577"></polygon>

/* <svg viewBox="0 0 1280 577" class="menu__shape menu__shape--left">
    <clipPath id="overlaySlideOne">
        <polygon points="0 0, 0 577, 474.60 577, 705 0"></polygon>
    </clipPath>
    <g width="1280" height="577" clip-path="url(#overlaySlideOne)">
        <rect width="1280" height="100%" style="fill: rgb(222, 223, 219);"></rect>
    </g>
</svg>
*/

/* 
<svg id="/" viewBox="0 0 1280 577" class="menu__image" style="z-index: 54;">
    <clipPath id="mask-0">
        <polygon id="polygon-/" points="1280 0, 1280 0, 1280 577, 1280 577"></polygon>
    </clipPath>
    <g x="473.60" width="704" height="577" clip-path="url(#mask-0)">
        <image width="934.4" x="473.60" height="100%" id="image-/" preserveAspectRatio="xMidYMid slice" xlink:href="https://d3c0x8onoccsn3.cloudfront.net/1000/1000/1504715514home.jpg" data-svg-origin="473.6000061035156 0" transform="matrix(1,0,0,1,0,0)">
        </image>
    </g>
</svg>
*/

/*
.menu__shape {
    position: fixed;
    z-index: -1;
    top: 0px;
    transform: translateZ(0px);
    will-change: contents;
    backface-visibility: hidden;
}
*/

/*
<svg viewBox="0 0 1280 577" class="menu__shape menu__shape--left">
    <clipPath id="overlaySlideOne">
        <polygon points="0 0, 0 577, 474.60 577, 705 0"></polygon>
    </clipPath>
    <g width="1280" height="577" clip-path="url(#overlaySlideOne)">
        <rect width="1280" height="100%" style="fill: rgb(222, 223, 219);"></rect>
    </g>
</svg>
*/

/*
<nav class="menu__nav">
    <svg width="17px" height="17px" viewBox="0 0 15 15" class="menu__star" style="transform: matrix(1, 0, 0, 1, -27, 70);">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(0, -21)" class="menu__starcolour">
                <polygon points="7.53132947 21 9.324801 26.5726175 15 26.5726175 10.3987652 29.9096009 12.1639782 35.3944283 7.5 32.0119157 2.9177545 35.3351221 4.65203247 29.9464525 0 26.5726175 5.73785795 26.5726175"></polygon>
            </g>
        </g>
    </svg>
    <ul>
        <li>
            <span data-link="/" style="cursor: pointer;">
                <a class="menu__item" data-id="/">Home</a>
            </span>
        </li>
        <li>
            <span class="menu__item menu__item--has-submenu" data-id="about">About</span>
        </li>
        <li>
            <a class="menu__item" data-id="tours" href="/tours">Tours</a>
        </li>
        <li>
            <span class="menu__item menu__item--has-submenu" data-id="timeline">Timeline</span>
        </li>
    </ul>
</nav>
*/

/*
.menu__shadow {
    position: absolute;
    inset: 0px;
    background: rgb(0, 0, 0);
    opacity: 0;
    transition: opacity 0.4s ease 0s;
    z-index: 0;
    will-change: opacity;
*/

/*
.menu--active .menu__shadow {
    opacity: 1;
    transition: opacity 0.66s ease 0s;
}
*/

/*
.menu__images {
    position: absolute;
    z-index: 1;
    inset: 0px;
}

.menu__images {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
*/

/* PARALLELOGRAM
clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
*/

/*
clip-path: polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%);
background-color: #000000
*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/