import { Link } from "react-router-dom";
import HomeHeaderBanner from "./HomeHeaderBanner";

const TopNav = () => {

    return (
        <div>

            <HomeHeaderBanner />
            <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
                <div className="hidden px-2 mx-auto navbar-center lg:flex">
                    <div className="flex items-stretch">
                        <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                            Home
                        </Link>
                        <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                            About
                        </Link>
                        <Link to="/projects" className="btn btn-ghost btn-sm rounded-btn">
                            Projects
                        </Link>
                        <Link to="/volunteer" className="btn btn-ghost btn-sm rounded-btn">
                            Volunteer
                        </Link>
                        <Link to="/contact" className="btn btn-ghost btn-sm rounded-btn">
                            CONTACT
                        </Link>
                        <Link to="/donate" className="btn btn-ghost btn-sm rounded-btn">
                            DONATE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TopNav;