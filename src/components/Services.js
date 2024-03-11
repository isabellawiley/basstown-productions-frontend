import hero from "./images/hero-img.png";
import quote1 from "./images/quote-img-1.jpg";
import '../styling/services.css';

function Services(){

    return(
        <div>
            <div id='hero-pic-container'>
                <img src={hero} alt="hero" className="hero-pic"/>
                <div className="overlay">SERVICES</div>
            </div>
            <div className="services-container">
                <div className="service">
                    <img src={quote1} alt="service" className="quote-img"/>
                    <div className="service-details">
                        <h2>Photography & Videography</h2>
                        <ul>
                            <li>Event Photos & Videos</li>
                            <li>Portraits</li>
                            <li>Promotional Videos</li>
                            <li>Drone Photography</li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <img src={quote1} alt="service" className="quote-img"/>
                    <div className="service-details">
                        <h2>Audio Production</h2>
                        <ul>
                            <li>Live Sound Engineering</li>
                            <li>Studio Recording</li>
                            <li>Audio Editing & Mixing</li>
                        </ul>
                    </div>
                </div>
                <div className="service">
                    <img src={quote1} alt="service" className="quote-img"/>
                    <div className="service-details">
                        <h2>Live Event Production</h2>
                        <ul>
                            <li>Budgeting & Scheduling</li>
                            <li>Live Streaming</li>
                            <li>Public Outreach</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;