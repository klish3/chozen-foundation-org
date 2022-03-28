

import HomeBanner from '../shared/component/Home/HomeBanner/HomeBanner';
import HomeBannerPartners from '../shared/component/Home/HomeBanner/HomeBannerPartners';
import HomeCarousel from '../shared/component/Home/HomeCarousel/HomeCarousel';
import HomeFooter from '../shared/component/Home/HomeFooter';
import HomeGrid from '../shared/component/Home/HomeGrid/HomeGrid';
import HomeGridTwo from '../shared/component/Home/HomeGrid/HomeGridTwo';

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <HomeGrid />
            <HomeBanner />
            <HomeGridTwo />
            <HomeBannerPartners />
            {/* HomeNewsletter */}
            <HomeFooter />
        </div>
    );
}
export default Home;