import hero from "./images/hero-img.png";
import quote1 from "./images/quote-img-1.jpg";
import quote2 from "./images/quote-img-2.jpg";
import '../styling/home.css';

function Home(){

    return(
        <div>
            <div id='hero-pic-container'>
                <img src={hero} alt="hero" className="hero-pic"/>
                <div className="overlay">WELCOME<br/>TO<br/>BASSTOWN</div>
            </div>
            <div>
                <div className="quote-container">
                    <img src={quote1} alt="quote1" className="quote-img"/>
                    <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</span>
                </div>
                <div className="quote-container">
                    <img src={quote2} alt="quote2" className="quote-img"/>
                    <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</span>
                </div>
            </div>
            {/* <div className="blog-container">
                <div className="blog-article">
                    <span>Blog Title</span>
                </div>
                <div className="blog-article">
                    <span>Blog Title</span>
                </div>
                <div className="blog-article">
                    <span>Blog Title</span>
                </div>
            </div> */}
        </div>
    )
}

export default Home;