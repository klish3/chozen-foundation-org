import Footer from '../components/Footer';
import LandingFeature from '../components/LandingFeature';
import Nav from '../components/Nav';
const Landing = () => {
	return (
		<div id="wrapper" className="fade-in">

			{/* <!-- Intro --> */}
			<div id="intro">
				<p>We are building the bridge of hope to care for Zimbabwe 🇿🇼</p>
				<h1>Chozen Foundation</h1>

				<ul className="actions">
				<li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
			</ul>
			</div>

			{/* <!-- Header --> */}
			<header id="header">
				<a href="index.html" className="logo">We are Cho<span className="z-text-heading">z</span>en</a>
			</header>

			{/* <!-- Nav --> */}
			<Nav />

			{/* <!-- Main --> */}
			<div id="main">

				{/* <!-- Featured Post --> */}
				<LandingFeature />

			

			</div>

			{/* <!-- Footer --> */}
			<Footer />

		</div>
	);
}

export default Landing;
