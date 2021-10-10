import Footer from '../components/Footer';
import LandingFeature from '../components/LandingFeature';
import LandingPostCard from '../components/LandingPostCard';
import Nav from '../components/Nav';
const Landing = () => {
	return (
		<div id="wrapper" className="fade-in">

			{/* <!-- Intro --> */}
			<div id="intro">
				<p>We are building the bridge of hope to care for Zimbabwe 🇿🇼</p>
				<h1>Chozen Foundation</h1>

				{/* <ul className="actions">
				<li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
			</ul> */}
			</div>

			{/* <!-- Header --> */}
			<header id="header">
				<a href="index.html" className="logo">Massively</a>
			</header>

			{/* <!-- Nav --> */}
			<Nav />

			{/* <!-- Main --> */}
			<div id="main">

				{/* <!-- Featured Post --> */}
				<LandingFeature />

				{/* <!-- Posts --> */}
				<section className="posts">
					
					<article>
						<header>
							{/* <span className="date">April 24, 2017</span> */}
							<h2>Family Empowerment Initiatives</h2>
						</header>
						<a href="/" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
						<p>We would like to ensure that families have access  to basic goods and services such as food and education. We would also like to provide  training and advice so that parents can break the cycle of poverty and generate an  income to look after their children. Many of the families in our programs need special  support because they are affected by HIV/AIDS. By strengthening families, we prevent  children from being forced to go out to work.</p>
						<ul className="actions special">
							<li><a href="/" className="button">More soon..</a></li>
						</ul>
					</article>
					<article>
						<header>
							{/* <span className="date">April 24, 2017</span> */}
							<h2>Fill A Backpack for Zimbabwe Christmas Initiative 2020</h2>
						</header>
						<a href="/" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
						<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
						<ul className="actions special">
							<li><a href="/" className="button">More soon..</a></li>
						</ul>
					</article>
				</section>

			</div>

			{/* <!-- Footer --> */}
			<Footer />

			{/* <!-- Copyright --> */}
			<div id="copyright">
				<ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">klish3.com</a></li></ul>
			</div>

		</div>
	);
}

export default Landing;
