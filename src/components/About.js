import hero from "./images/hero-img.png";
import '../styling/about.css';

function About(){

    return(
        <div>
            <div id='hero-pic-container'>
                <img src={hero} alt="hero" className="hero-pic"/>
                <div className="overlay">ABOUT</div>
            </div>
            <span className="about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
    )
}

export default About;