import hero from "./images/hero-img.png";
// import quote1 from "./images/quote-img-1.jpg";
import dompston from "./images/dompston.jpg";
import dungeon from "./images/2_25_2024_dungeon_synth-15.jpg";
import mister from "./images/11_17_2023_mister_data-08.jpg";
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
                    <img src={dompston} alt="production" className="quote-img"/>
                    <div className="production-details">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                        <p>12~28~23</p>
                        <p>- Dompston</p>
                    </div>
                </div>
                <div className="production">
                    <img src={dungeon} alt="production" className="quote-img"/>
                    <div className="production-details">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                        <p>2~25~24</p>
                        <p>- Dungeon Synth</p>
                    </div>
                </div>
                <div className="production">
                    <img src={mister} alt="production" className="quote-img"/>
                    <div className="production-details">
                        <span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</span>
                        <p>11~17~23</p>
                        <p>- Mister Data</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productions;