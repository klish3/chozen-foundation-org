import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export const Donations: React.FC = () => {
  return (
    <div id="wrapper">
      {/* <!-- Header --> */}
      <header id="header">
        <a href="/" className="logo">
          Donate
        </a>
      </header>

      <Nav />

      {/* <!-- Main --> */}
      <div id="main">
        <p>Details on how to donate are coming soon</p>
      </div>
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
};
export default Donations;
