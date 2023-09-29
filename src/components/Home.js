import hero from "./images/hero-img.png";
import '../styling/home.css';

function Home(){

    return(
        <div>
            <div id='hero-pic-container'>
                <img src={hero} alt="hero" className="hero-pic"/>
                <div className="overlay">WELCOME<br/>TO<br/>BASSTOWN</div>
            </div>
        </div>
    )
}

export default Home;