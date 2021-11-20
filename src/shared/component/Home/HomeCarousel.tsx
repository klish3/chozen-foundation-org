

import reel1 from '../../../assets/images/reel_1.jpg';
import reel2 from '../../../assets/images/reel_2.jpg';
import reel3 from '../../../assets/images/reel_3.jpg';

const HomeCarousel = () => {
    return (
        <div className="h-96 w-full carousel">
            <div id="slide1" className="relative w-full  carousel-item">
                <img alt="r" src={reel1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="relative w-full carousel-item">
                <img alt="r" src={reel2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="relative w-full  carousel-item">
                <img alt="r" src={reel3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
}

export default HomeCarousel;