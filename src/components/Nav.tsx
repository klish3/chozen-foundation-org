import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="nav">
            <ul className="links">

                <li><NavLink activeClassName='is-active' exact={true} to="/">Chozen</NavLink></li>

                <li><NavLink activeClassName='is-active' to="/story">Our Story</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/champions">Our Champoins</NavLink></li>
                <li><NavLink activeClassName='is-active' to="/donate">Donate</NavLink></li>
            </ul>
            <ul className="icons">
                <li><a href="https://www.instagram.com/chozenfoundation/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                <li><a href="mailto:the.chozenfoundation@gmail.com" className="icon fa-envelope"><span className="label">Mail</span></a></li>
            </ul>
        </nav>
    );
}

export default Nav;