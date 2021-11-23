import './HomeBanner.css'
const HomeBanner = () => {
    return (

        <div className="hero h-96 my-5 bg-xmas-img">
            <div className="text-center w-full text-neutral-content items-end pr-20">
                <div className="ml-auto w-96">
                    <h1 className="mb-3 text-3xl font-bold">

                        <span className="text-warning">WE NEED YOUR HELP </span>

                        <br /> CHRISTMAS 2021
                    </h1>
                    <p className="mb-3 text-xl">
                        volunteer services or make a donation
                    </p>
                    <a className="">
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