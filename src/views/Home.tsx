import Hero from '../components/Home/Hero';
import HomeCarousel from '../shred/component/HomeCarousel';
import HomeGrid from '../shred/component/HomeGrid';
import HomeGridTwo from '../shred/component/HomeGridTwo';

const Home = () => {
    return (
        <div>

            <HomeCarousel />
            <HomeGrid />
            <Hero />
            <HomeGridTwo />
        </div>
    );
}
export default Home;