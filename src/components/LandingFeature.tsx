import pic08 from '../assets/images/home_1.jpg';
import pic09 from '../assets/images/home_2.jpg';
const LandingFeature = () => {
    return (
        <div>
            <div id="main">
                <section>
                    <span>
                        <span className="image left"><img src={pic08} alt="" /></span>

                        <h2>Our Values</h2>
                        <ul className="value-list">
                            <li> <strong>Commitment</strong>
                                - We are dedicated to changing lives.</li>
                            <li><strong>Compassion</strong>
                                - We are guided by empathy.</li>
                            <li><strong>Collaboration</strong>
                                - We are best when united.</li>
                            <li>
                                <strong>Conscientiousness</strong> - We are best when we are diligent.</li>
                        </ul>
                    </span>
                    <br />

                </section>
            </div>
            <br />
            <div id="main">
                <section>
                    <span>
                        <span className="image right "><img src={pic09} alt="" /></span>

                        <h2 className="text-align-right">Our Focus</h2>
                        <ul className="value-list text-align-right">
                            <li>Education </li>
                            <li>Food Poverty</li>
                            <li>Maternal and Child Health </li>
                            <li>Family and Domestic Violence</li>
                        </ul>
                    </span>
                </section>
            </div>
        </div>
    );
}
export default LandingFeature;
