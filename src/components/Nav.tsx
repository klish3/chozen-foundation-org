import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="nav">
        <ul className="links">
        
            <li className="active"><Link to="/">Home</Link></li>

            {/* <li><Link to="/about">About us</Link></li> */}

        </ul>
        <ul className="icons">
            <li><a href="https://www.instagram.com/chozenfoundation/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="mailto:the.chozenfoundation@gmail.com" className="icon fa-envelope"><span className="label">Mail</span></a></li>
        </ul>
    </nav>
    );
}

export default Nav;