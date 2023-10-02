import hero from "./images/hero-img.png";
import '../styling/contact.css';

function Contact(){

    return(
        <div>
            <div id='hero-pic-container'>
                <img src={hero} alt="hero" className="hero-pic"/>
                <div className="overlay">CONTACT</div>
            </div>
            <div>
                <div className="social-links-container">
                    <div className="circle insta"></div>
                    <div className="circle facebook"></div>
                    <div className="circle linkedin"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;