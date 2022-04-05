import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>

            <footer className="p-10 footer bg-base-200 text-base-content footer-center">
                <div className="grid grid-flow-col gap-4">
                    <Link to="/about" className="link link-hover">About</Link>
                    <Link to="/our-initiatives" className="link link-hover">Our Initiatives</Link>
                    <Link to="/how-to-help" className="link link-hover">How to help</Link>
                    <Link to="/our-board" className="link link-hover">Our Board</Link>
                    <Link to="/donate" className="link link-hover">Donate</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/thechozenfoundation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/chozenfoundation/">
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/company/chozen-foundation">
                            <svg width="30" height="30" viewBox="0 0 140 140" fill="black" xmlns="http://www.w3.org/2000/svg">
                                <path d="M93.3335 46.6667C102.616 46.6667 111.518 50.3542 118.082 56.918C124.646 63.4818 128.334 72.3842 128.334 81.6667V122.5H105V81.6667C105 78.5726 103.771 75.6051 101.583 73.4172C99.3952 71.2292 96.4277 70.0001 93.3335 70.0001C90.2393 70.0001 87.2718 71.2292 85.0839 73.4172C82.896 75.6051 81.6668 78.5726 81.6668 81.6667V122.5H58.3335V81.6667C58.3335 72.3842 62.021 63.4818 68.5848 56.918C75.1485 50.3542 84.0509 46.6667 93.3335 46.6667V46.6667Z" fill="black" />
                                <path d="M34.9998 52.5H11.6665V122.5H34.9998V52.5Z" fill="black" />
                                <path d="M23.3332 35.0001C29.7765 35.0001 34.9998 29.7767 34.9998 23.3334C34.9998 16.8901 29.7765 11.6667 23.3332 11.6667C16.8898 11.6667 11.6665 16.8901 11.6665 23.3334C11.6665 29.7767 16.8898 35.0001 23.3332 35.0001Z" fill="black" />
                            </svg>

                        </a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - The Chozen Foundation</p>
                </div>
            </footer>


        </div>
    );
}

export default Footer;