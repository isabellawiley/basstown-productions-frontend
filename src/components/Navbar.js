import { Link } from "react-router-dom";


function Navbar(){

    return(
        <div>
            Navbar
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="services">Services</Link>
                </li>
                <li>
                    <Link to="productions">Productions</Link>
                </li>
                <li>
                    <Link to="faq">FAQ</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;