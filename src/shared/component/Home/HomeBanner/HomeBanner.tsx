import './HomeBanner.scss'
const HomeBanner = () => {
    return (

        <div className="hero h-96 my-5 bg-xmas-img">
            <div className="text-center w-full text-neutral-content items-end lg:pr-20">
                <div className="lg:ml-auto md:m-auto w-96">
                    <h1 className="mb-3 text-3xl font-bold">

                        <span className="text-warning">WE NEED YOUR HELP </span>

                        <br /> CHRISTMAS 2021
                    </h1>
                    <p className="mb-3 text-xl">
                        volunteer services or make a donation
                    </p>
                    <a href="/" className="">
                        <u>
                            MORE INFO  {'>'}
                        </u>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default HomeBanner;