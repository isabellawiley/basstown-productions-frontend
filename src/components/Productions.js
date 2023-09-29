import hero from "./images/hero-img.png";
import quote1 from "./images/quote-img-1.jpg";
// import '../styling/services.css';

function Productions(){

    return(
        <div>
            <div id='hero-pic-container'>
                <img src={hero} alt="hero" className="hero-pic"/>
                <div className="overlay productions">PRODUCTIONS</div>
            </div>
            <div className="services-container">
                <div className="production">
                    <img src={quote1} alt="production" className="quote-img"/>
                    <div className="production-details">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                        <p>Location/Date</p>
                        <p>- Group/Person Name</p>
                    </div>
                </div>
                <div className="production">
                    <img src={quote1} alt="production" className="quote-img"/>
                    <div className="production-details">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                        <p>Location/Date</p>
                        <p>- Group/Person Name</p>
                    </div>
                </div>
                <div className="production">
                    <img src={quote1} alt="production" className="quote-img"/>
                    <div className="production-details">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                        <p>Location/Date</p>
                        <p>- Group/Person Name</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productions;