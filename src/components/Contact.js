import hero from "./images/hero-img.png";
import '../styling/contact.css';
import Logo from "./images/Logo";
import ContactForm from "./ContactForm";

function Contact(){

    return(
        <div>
            <div id='hero-pic-container'>
                <img src={hero} alt="hero" className="hero-pic"/>
                <div className="overlay">CONTACT</div>
            </div>
            <div>
                <div className="social-links-container">
                    <a href="https://www.instagram.com/thisismichaelb/" target="_blank"><div className="circle insta"></div></a>
                    <a href="https://www.facebook.com/michael.bartkowiak?mibextid=LQQJ4d" target="_blank"><div className="circle facebook"></div></a>
                    <a href="https://www.linkedin.com/in/michaelbartkowiak/" target="_blank"><div className="circle linkedin"></div></a>
                </div>
            </div>
            <ContactForm />
            {/* <div className="poop">
                <Logo />
            </div> */}
        </div>
    )
}

export default Contact;