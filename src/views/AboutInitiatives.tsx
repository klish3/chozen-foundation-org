export const AboutInitiatives = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="bebc38d1-bf72-4c77-a073-f0fe5abe0753"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#bebc38d1-bf72-4c77-a073-f0fe5abe0753)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">OUR INITIATIVES</span>
                    </span>{' '}

                </h2>
            </div>
            <div className="grid gap-8 row-gap-12 lg:grid-cols-2">
                <div className="max-w-md sm:mx-auto sm:text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-3 text-xl font-bold leading-5">Fill a Backpack for Zimbabwe</h6>
                    <p className="mb-3 text-sm text-gray-900">
                        Fill a Backpack for Zimbabwe is Chozen Foundation’s flagship program that kickstarted the foundation’s journey of helping people and communities in Zimbabwe. The program mobilizes community support to gather and collect daily and essential supplies such as clothing, shoes, school stationery, baby blankets for the people of Zimbabwe who are in need.

                    </p>
                </div>
                <div className="max-w-md sm:mx-auto sm:text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <svg
                            className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-3 text-xl font-bold leading-5">Greater Love Initiative
                    </h6>
                    <p className="mb-3 text-sm text-gray-900">
                        For Valentine’s Day, 2021, Chozen Foundation wanted to do something special and memorable for children. So, we launched the Greater Love Initiative where Chozen Foundation donated food hampers, school supplies, sanitary ware and cleaning detergents to two children’s homes, namely, Tanyaradzwa Children’s Home and Simbaredenga Newstart Children’s Home.

                    </p>

                </div>
            </div>
        </div>
    );
};