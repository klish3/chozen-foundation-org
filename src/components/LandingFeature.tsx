import pic08 from '../assets/images/home_1.jpg';
import pic09 from '../assets/images/home_2.jpg';
const LandingFeature = () => {
    return (
        <div>

            <section>

                <p>
                    <span className="image left"><img src={pic08} alt="" /></span>
                    <br />
                    <h2>Our Values</h2>
                    <ul className="value-list">
                        <li>Commitment - We are dedicated to changing lives.</li>
                        <li>Compassion - We are guided by empathy.</li>
                        <li>Collaboration - We are best when united.</li>
                        <li>Conscientiousness - We are best when we are diligent.</li>
                    </ul>
                </p>

                <br />
                <br />
                <br />

                <p>
                    <span className="image right "><img src={pic09} alt="" /></span>
                    <br />
                    <h2 className="text-align-right">Our Focus</h2>
                    <ul className="value-list text-align-right">
                        <li>Education </li>
                        <li>Food Poverty</li>
                        <li>Maternal and Child Health </li>
                        <li>Family and Domestic Violence</li>
                    </ul>
                </p>
                <br />
                <br />
                <br />
            </section>
        </div>


    );
}
export default LandingFeature;
