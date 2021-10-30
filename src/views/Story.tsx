import Nav from '../components/Nav';
import logo from '../assets/images/chozen_logo_ybg.png';
import Footer from '../components/Footer';

const Story = () => {
  return (
    <div id="wrapper">

      {/* <!-- Header --> */}
      <header id="header">
        <a href="/" className="logo">Our story</a>
      </header>

      <Nav />

      {/* <!-- Main --> */}
      <div id="main">
        <section className="post">
          <div className="image main"><img src={logo} width={50} alt="" /></div>
          <header className="major">

            <h1>Our Story</h1>
            <p>Chozen Foundation was established in January 2021 as a result of a personal Christmas donations initiative run by the founder Taida Chigogora. This initiative was called Fill A  Backpack for Zimbabwe. This initiative asked the community to fill backpacks with  preloved and brand new clothing and resources for disadvantaged and vulnerable  communities in Zimbabwe. These items
              ranged from clothing, sanitary ware, blankets
              and school stationery. The incredible
              response to this initiative then led to the birth
              of Chozen Foundation. A not-for-profit
              providing care and support to disadvantaged
              and vulnerable people in Zimbabwe. Chozen
              Foundation sees itself as a bridge. A bridge
              between the communities needing support
              and those who are wanting to help. This is
              why Chozen Foundation aims to build
              valuable and long-term partnerships with
              organisations who align with the organisation’s mission and vision.
              Chozen Foundation is currently in the process of recruiting a board of directors who will  assist in developing the direction and governance of the organisation.
            </p>
          </header>
        </section>

        {/* <section>
          <h3>Left &amp; Right</h3>
          <p><span className="image left"><img src={pic08} alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>
          <p><span className="image right"><img src={pic09} alt="" /></span>Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum ante ipsum primis in faucibus magna blandit adipiscing eu felis iaculis.</p>
        </section>
     */}

      </div>
      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default Story;