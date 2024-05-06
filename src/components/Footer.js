import '../styling/footer.css';

function Footer(){

    return(
        <div className="footer">
            <h1>STAY CONNECTED</h1>
            <div className="footer-links-container">
            <a href="https://www.instagram.com/thisismichaelb/" target="_blank"><div className="circle insta"></div></a>
            <a href="https://www.facebook.com/michael.bartkowiak?mibextid=LQQJ4d" target="_blank"><div className="circle facebook"></div></a>
            <a href="https://www.linkedin.com/in/michaelbartkowiak/" target="_blank"><div className="circle linkedin"></div></a>
            </div>
            {/* <div className='newsletter'></div> */}
        </div>
    )
}

export default Footer;