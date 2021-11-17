import pic09 from '../../assets/images/home_2.jpg';
const HomeHeaderBanner = () => {
    return (
        <div>
            <div className="hero min-h-100 my-5 bg-transparent">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img alt="https://picsum.photos/id/1005/600/600" src={pic09} className="max-w-lg rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    );
}

export default HomeHeaderBanner;