

import HomeBanner from '../shared/component/Home/HomeBanner/HomeBanner';
import HomeBannerPartners from '../shared/component/Home/HomeBanner/HomeBannerPartners';
import HomeFooter from '../shared/component/Home/HomeFooter';
import HomeGrid from '../shared/component/Home/HomeGrid/HomeGrid';
import HomeGridTwo from '../shared/component/Home/HomeGrid/HomeGridTwo';

const Home = () => {
    return (
        <div>

            <div className="container">
                <HomeGrid />
                <HomeBanner />
                <HomeGridTwo />

            </div>
            <HomeBannerPartners />
            {/* HomeNewsletter */}
            <HomeFooter />

        </div>
    );
}
export default Home;