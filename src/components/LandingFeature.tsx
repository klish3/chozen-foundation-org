

import pic02 from '../assets/images/pic02.jpg';

const LandingFeature = () => {
    return (
        <div>
            <article className="post featured">
                <header>
                    <h2>Our Values</h2>
                    <ul className="value-list">
                        <li>Commitment - We are dedicated to changing lives.</li>
                        <li>Compassion - We are guided by empathy.</li>
                        <li>Collaboration - We are best when united.</li>
                        <li>Conscientiousness - We are best when we are diligent.</li>
                    </ul>
                </header>
                <header>
                    <h2>Our Focus</h2>
                    <ul className="value-list">
                        <li>Education </li>
                        <li>Food Poverty</li>
                        <li>Maternal and Child Health </li>
                        <li>Family and Domestic Violence</li>
                    </ul>
                </header>

            </article>
            <header>
                <h2>Our Mission</h2>
                <p>To be the catalyst of change for vulnerable and disadvantaged Zimbabweans</p>
            </header>

            <header>
                <h2>Our Statement</h2>
                <p>To create a world where all Zimbabweans are supported to live purposeful and  meaningful lives.</p>
            </header>

       
            <article>


                <div className="box alt">
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-4"><span className="image fit"><img src={pic02} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic02} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic02} alt="" /></span></div>
                    </div>
                </div>
            </article>





        </div>


    );
}

export default LandingFeature;