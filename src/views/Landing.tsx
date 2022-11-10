import React from "react";
import Footer from "../components/Footer";
import LandingFeature from "../components/LandingFeature";
import LandingSectionThree from "../components/LandingSectionThree";
import LandingSectionTwo from "../components/LandingSectionTwo";
import Nav from "../components/Nav";

export const Landing: React.FC = () => {
  return (
    <div id="wrapper" className="fade-in">
      {/* <!-- Intro --> */}
      <div id="intro">
        <p>We are building the bridge of hope to care for Zimbabwe 🇿🇼</p>
        <h1>Chozen Foundation</h1>
      </div>

      {/* <!-- Header --> */}
      <header id="header">
        <a href="/" className="logo">
          We are Cho<span className="z-text-heading">z</span>en
        </a>
      </header>

      {/* <!-- Nav --> */}
      <Nav />

      {/* <!-- Featured Post --> */}
      <LandingFeature />

      <br />
      <div id="main">
        {/* <!-- Featured Post --> */}
        <LandingSectionTwo />
      </div>
      <br />
      <div id="main">
        {/* <!-- Featured Post --> */}
        <LandingSectionThree />
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
};

export default Landing;
