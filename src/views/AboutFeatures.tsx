export const AboutFeatures = () => {
    return (
        <div className="mt-3 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
            <div className="grid max-w-md gap-8 row-gap-10 max-w-full sm:grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-col sm:flex-row">

                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
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
                        <h6 className="mb-2 font-semibold leading-5">OUR KEY FOCUS AREAS</h6>
                        <p className="mb-3 text-sm text-gray-900">
                            As a non-profit working in assisting the disadvantaged and vulnerable communities in Zimbabwe, our mission is to help these communities with resources and guidance they require to lead independent, self-sufficient and sustainable lives. We achieve our mission by focusing on key areas of development, which are:
                        </p>
                        <ul className="mb-4 -ml-1 space-y-2  text-sm">
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Provision of food to help tackle hunger and malnutrition.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Preventing domestic violence by creating awareness against all kinds of abuse and aiding the victims of domestic violence to seek help
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Promoting education to better equip children and young adults for a brighter future.
                            </li>
                            <li className="flex items-start">
                                <span className="mr-1">
                                    <svg
                                        className="w-5 h-5 mt-px text-deep-purple-accent-400"
                                        stroke="currentColor"
                                        viewBox="0 0 52 52"
                                    >
                                        <polygon
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            points="29 13 14 29 25 29 23 39 38 23 27 23"
                                        />
                                    </svg>
                                </span>
                                Promotion of the importance of maternal and child health.
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">

                    <div>
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-12 h-12 text-deep-purple-accent-400"
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
                        <h6 className="mb-2 font-semibold leading-5">OUR VALUES</h6>

                        <ul className="mb-4 -ml-1 space-y-2  text-sm">
                            <li className=" items-start">

                                <strong><i>Commitment:</i></strong> <br />
                                We are deeply committed to transforming lives for the better.
                            </li>
                            <li className=" items-start">

                                <strong><i>Compassion:</i></strong>
                                <br />
                                In a world where compassion is hard to come by, we are guided by empathy in all that we do.
                            </li>
                            <li className=" items-start">

                                <strong><i>Collaboration:</i></strong>
                                <br />
                                We believe in working collaboratively to turn our purpose into reality.
                            </li>
                            <li className=" items-start">

                                <strong><i>Conscientiousness:</i></strong>
                                <br />
                                We are able to remain true to our purpose when we stay diligent and never lose sight of our mission.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
};