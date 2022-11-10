import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const Champions: React.FC = () => {
  return (
    <div id="wrapper">
      {/* <!-- Header --> */}
      <header id="header">
        <a href="/" className="logo">
          Our Champions 🏆
        </a>
      </header>

      <Nav />
      {/* <!-- Main --> */}
      <div id="main">
        <p>
          <strong>Want to become a Chozen Champion?</strong>
          <br />
          Details on how to become a Chozen Champion will be coming soon🏆
        </p>
      </div>

      <Footer />
    </div>
  );
};
export default Champions;
