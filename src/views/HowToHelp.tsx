

import { Link } from 'react-router-dom';
import home5 from '../assets/images/how_to_help_1.jpg';
import Item from '../shared/component/Items';
import HowToHelpCorpSponsor from './HowToHelpCorpSponsor';
import HowToHelpInvolvement from './HowToHelpInvolvement';
const HowToHelp = () => {
    return (
        <div>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
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
                                            id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">HOW TO HELP</span>
                            </span>{' '}

                        </h2>
                    </div>
                </div>
                <div className="max-w-screen-xl sm:mx-auto">
                    <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <p className="text-gray-700">
                                    If you’d like to be a part of Chozen Foundation, then being a volunteer is the best place to showcase your compassion. Our volunteers are the backbone of the foundation and it is through them that we navigate and share our mission with the community.
                                    <br />
                                    <br />
                                    Chozen Foundation is always on the lookout for volunteers in both Australia and Zimbabwe who are willing to utilize their skills, passion and drive to make a real impact on the lives of the people in Zimbabwe.
                                    <br />
                                    <br />
                                    You don’t need to be an expert to volunteer with us. All we ask is that you have a passion for
                                    community and we can always help you find a way that you can volunteer with us. All help is important and all help is needed.
                                </p>
                            </div>

                        </div>
                        <div className="space-y-8">
                            <div className="relative sm:mb-5 md:col-span-2 lg:col-span-2">
                                <img
                                    className="inset-0 object-cover object-top sm:w-full lg:w-9/12 rounded shadow-lg h-full"
                                    src={home5}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                Become a Chozen Champion
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg ">
                                Ideas on how to help
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Item title="Donate">
                                Donations make up a majority of our financial contributions. It is only through your donations that we are able to launch new initiatives and reach a wider group of people in Zimbabwe. If would like to support us in our mission of helping communities in Zimbabwe, then donate today and help us transform lives and bring hope to the most vulnerable communities in Zimbabwe.
                                <br />
                                <br />
                                <Link
                                    to="/donate"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-primary transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                >
                                    Donate
                                </Link>
                            </Item>
                            <Item title="Fundraise">
                                <strong>Birthday</strong>
                                <br />
                                <span>Raise money for a special occasion. Dedicate your birthday or special occasion to Chozen Foundation.</span>
                                <br />
                                <br />
                                <strong> Get Active</strong>
                                <br />
                                <span>You can actively fundraise throughout the year, the proceeds of which will be utilized to carry out our initiatives.</span>
                                <br />
                                <br />
                                <strong>At Work</strong>
                                <br />
                                <span>Workplace is a great wonderful environment to look for fundraising opportunities.</span>
                            </Item>
                        </div>
                    </div>
                </div>
                <HowToHelpInvolvement />
            </div>
            <HowToHelpCorpSponsor />
        </div>
    );
};

export default HowToHelp;

