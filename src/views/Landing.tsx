import {
	Link
  } from 'react-router-dom';
import Footer from '../components/Footer';
const Landing = () => {
  return (
	<div id="wrapper" className="fade-in">

	{/* <!-- Intro --> */}
		<div id="intro">
			<h1>We are <br /> chozen foundation</h1>
			<p>Building a bridge of hope and care to Zimbabwe 🇿🇼</p>
			{/* <ul className="actions">
				<li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
			</ul> */}
		</div>

	{/* <!-- Header --> */}
		<header id="header">
			<a href="index.html" className="logo">Massively</a>
		</header>

	{/* <!-- Nav --> */}
		<nav id="nav">
			<ul className="links">
			
				<li className="active"><Link to="/">Home</Link></li>
				<li><Link to="/about">About us</Link></li>
				{/* <li><Link to="/dashboard">Dashboard</Link></li> */}
			</ul>
			<ul className="icons">
				<li><a href="https://www.instagram.com/chozenfoundation/" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
				<li><a href="mailto:the.chozenfoundation@gmail.com"><span className="label">Mail</span></a></li>
			</ul>
		</nav>

	{/* <!-- Main --> */}
		<div id="main">

			{/* <!-- Featured Post --> */}
				<article className="post featured">
					<header className="major">
						<h2><a href="/">And this is a<br />
						massive headline</a></h2>
						<p>Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
						facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
						amet nullam sed etiam veroeros.</p>
					</header>
					<a href="/" className="image main"><img src="images/chzen-landing-bg.jpg" alt="" /></a>
					<ul className="actions special">
						<li><a href="/" className="button large">Full Story</a></li>
					</ul>
				</article>

			{/* <!-- Posts --> */}
				<section className="posts">
					<article>
						<header>
							<span className="date">April 24, 2017</span>
							<h2><a href="/">Sed magna<br />
							ipsum faucibus</a></h2>
						</header>
						<a href="/" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
						<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
						<ul className="actions special">
							<li><a href="/" className="button">Full Story</a></li>
						</ul>
					</article>
					<article>
						<header>
							<span className="date">April 22, 2017</span>
							<h2><a href="/">Primis eget<br />
							imperdiet lorem</a></h2>
						</header>
						<a href="/" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
						<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
						<ul className="actions special">
							<li><a href="/" className="button">Full Story</a></li>
						</ul>
					</article>
					<article>
						<header>
							<span className="date">April 18, 2017</span>
							<h2><a href="/">Ante mattis<br />
							interdum dolor</a></h2>
						</header>
						<a href="/" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
						<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
						<ul className="actions special">
							<li><a href="/" className="button">Full Story</a></li>
						</ul>
					</article>
					<article>
						<header>
							<span className="date">April 14, 2017</span>
							<h2><a href="/">Tempus sed<br />
							nulla imperdiet</a></h2>
						</header>
						<a href="/" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
						<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
						<ul className="actions special">
							<li><a href="/" className="button">Full Story</a></li>
						</ul>
					</article>
					<article>
						<header>
							<span className="date">April 11, 2017</span>
							<h2><a href="/">Odio magna<br />
							sed consectetur</a></h2>
						</header>
						<a href="/" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
						<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
						<ul className="actions special">
							<li><a href="/" className="button">Full Story</a></li>
						</ul>
					</article>
					<article>
						<header>
							<span className="date">April 7, 2017</span>
							<h2><a href="/">Augue lorem<br />
							primis vestibulum</a></h2>
						</header>
						<a href="/" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
						<p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
						<ul className="actions special">
							<li><a href="/" className="button">Full Story</a></li>
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
