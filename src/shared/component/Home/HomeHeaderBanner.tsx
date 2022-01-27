import pic09 from '../../../assets/images/home_2.jpg';

const HomeHeaderBanner = () => {
    return (
        <div>
            <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-2/3">

                <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                    <div className="container mx-auto px-6 flex relative py-16">
                        <div className="block sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12">
                            </span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">

                                CHOZEN FOUNDATION
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                                We are building the bridge of hope to care for Zimbabwe 🇿🇼

                            </p>

                        </div>
                        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                            <img src={pic09} className="rounded-tl-lg max-w-xs md:max-w-sm ml-auto" alt='chozen' />
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default HomeHeaderBanner;