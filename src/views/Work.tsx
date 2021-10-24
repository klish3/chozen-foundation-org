import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Work = () => {
    return (
        <div>
            <div id="wrapper">

                {/* <!-- Header --> */}
                <header id="header">
                    <a href="/" className="logo">Our work</a>
                </header>

                <Nav />
                <div id="main">
                    <section>
                        <h1>The Work</h1>
                    </section>
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
            </div>
            {/* <!-- Footer --> */}
            <Footer />
        </div>
    );
}

export default Work;