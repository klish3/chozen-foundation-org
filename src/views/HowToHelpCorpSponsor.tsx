import home5 from '../assets/images/home_1.jpg';

const HowToHelpCorpSponsor = () => {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">

                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Corporate
                            <br className="hidden md:block" />
                            Partnerships{' '}

                        </h2>
                        <p className="text-base text-gray-700 ">
                            At Chozen Foundation, we believe that when we work together as a community we can make a greater impact. For this reason, we always encourage small businesses and corporates to partner with us on our initiatives. Partnering with us can help in helping businesses and corporate organizations fulfil their Corporate Social Responsibility while ensuring that the resources brought in by them are fully utilized to provide greater support to the vulnerable communities in Zimbabwe.
                            <br />
                            <br />
                            If you’d like to partner with Chozen Foundation then get in touch with us today. We’re looking forward to partnering with you.
                        </p>
                    </div>

                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover object-top w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
                    src={home5}
                    alt=""
                />
            </div>
        </div>
    );
};
export default HowToHelpCorpSponsor;