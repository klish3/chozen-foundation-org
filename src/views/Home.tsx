

import HomeBanner from '../shared/component/Home/HomeBanner/HomeBanner';
import HomeCarousel from '../shared/component/Home/HomeCarousel';
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
            {/* HomePartners */}
            {/* HomeNewsletter */}
            <HomeFooter />
        </div>
    );
}
export default Home;