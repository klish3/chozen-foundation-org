import { Link } from "react-router-dom";

export const HowToHelpInvolvement = () => {
    return (
        <div>
            <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 my-10">
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
                                        id="9012817d-af60-45bb-9786-89646bc1c945"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#9012817d-af60-45bb-9786-89646bc1c945)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">What's involved?</span>
                        </span>{' '}

                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Volunteers support our operations and initiatives in a variety of ways
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-3">
                    <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
                        <h6 className="mb-2 font-semibold leading-5">Fundraising and assisting at events</h6>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
                        <h6 className="mb-2 font-semibold leading-5">Administration tasks</h6>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
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
                        <h6 className="mb-2 font-semibold leading-5">Working on Project Committees</h6>
                    </div>
                </div>
                <div className="text-center">
                    <Link
                        to="/donate"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                        Start with a donation
                    </Link>
                </div>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="w-full">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">

                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Here are a few questions that
                                <br className="hidden md:block" />
                                will help you decide whether you would be an asset at {' '}
                                <span className="inline-block text-deep-purple-accent-400">
                                    Chozen Foundation.
                                </span>
                            </h2>

                        </div>
                        <ol>
                            <li>1. Are you able to spare a few hours per week to assist us in our operation?</li>
                            <li>2. Are you deeply passionate about helping those in need?</li>
                            <li>3. Are you over 18 years of age?</li>
                            <li>4. Are you excited to become a part of a community with like-minded people who work together to bring hope to the communities in Zimbabwe?</li>
                        </ol>
                        <br />

                        <p className="text-base text-gray-700 md:text-lg">
                            If your answer to all these questions was a big YES, then we would very much like for you to join our team today. Apply today to volunteer with Chozen Foundation and we will be in touch with you.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowToHelpInvolvement;