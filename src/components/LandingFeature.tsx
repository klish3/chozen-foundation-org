import logo from '../assets/images/chozen_logo_ybg.png';
const LandingFeature = () => {
    return (
        <div>
            <section className="post">
            <div className="image main"><img src={logo} width={210} alt="" /></div>
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

            <article className="post featured">
                <header className="major">
                    <h2>What We Do</h2>
                    <p>We are currently collecting clothing, sanitary ware, shoes, baby-care and cash  donations to send to vulnerable communities in Zimbabwe. Our main goal at the  moment is to raise adequate funding to send a shipping container to Zimbabwe.  We currently have a number of boxes of donations waiting to be sent. We are a  collaborative charity. Creating long-term partnerships is one of our key goals</p>
                </header>
            </article>
            <article className="post featured">
                <header className="major">
                    <h2>Mission Statement</h2>
                    <p>To be the catalyst of change for vulnerable and disadvantaged Zimbabweans</p>
                </header>
            </article>
            <article className="post featured">
                <header className="major">
                    <h2>Vision Statement</h2>
                    <p>To create a world where all Zimbabweans are supported to live purposeful and  meaningful lives.</p>
                </header>
            </article>
            <article className="post featured">
                <header className="major">
                    <h2>Our Values</h2>
                    <ul className="value-list">
                        <li>Commitment - We are dedicated to changing lives.</li>
                        <li>Compassion - We are guided by empathy.</li>
                        <li>Collaboration - We are best when united.</li>
                        <li>Conscientiousness - We are best when we are diligent.</li>
                    </ul>
                </header>
            </article>
        </div>


    );
}

export default LandingFeature;