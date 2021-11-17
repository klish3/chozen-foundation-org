import pic09 from '../../assets/images/home_2.jpg';
const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-100 my-5 bg-transparent">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img alt="https://picsum.photos/id/1005/600/600" src={pic09} className="max-w-lg rounded-lg shadow-2xl" />
                    <div className="text-center">
                        <h1 className="mb-5 text-5xl font-bold">
                            WE NEED YOUR HELP <br /> CHRISTMAS 2021
                        </h1>
                        <p className="mb-5">
                            volunteer services or make a donation
                        </p>
                        <button className="btn btn-primary">MORE INFO</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;