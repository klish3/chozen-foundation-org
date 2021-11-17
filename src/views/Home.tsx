

import HomeBanner from '../shared/component/HomeBanner';
import HomeCarousel from '../shared/component/HomeCarousel';
import HomeFooter from '../shared/component/HomeFooter';
import HomeGrid from '../shared/component/HomeGrid';
import HomeGridTwo from '../shared/component/HomeGridTwo';

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