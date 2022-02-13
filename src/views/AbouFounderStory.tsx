

import home5 from '../assets/images/home_5.jpg';
const AboutFounderStory = () => {
    return (
        <div className="px-4 py-16 mx-auto max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
                <div className="lg:w-1/2">
                    <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
                        FOUNDER STORY
                    </h2>
                    <div className="relative sm:mb-5 md:col-span-2 lg:col-span-2">
                        <img
                            className="inset-0 object-cover object-top sm:w-full lg:w-9/12 rounded shadow-lg h-full"
                            src={home5}
                            alt=""
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 text-base text-gray-700 md:text-lg">
                    <p>
                        When the COVID-19 pandemic hit in 2020, Taida was in-between jobs and had to rely on friends and family for financial support. It was during this period, that she began to contemplate the dire situation of many people in her home country, Zimbabwe. Unlike her, most people in Zimbabwe were struggling due to the pandemic and did not have friends or family who could help them stay afloat or take care of their financial needs. The government aid was not sufficient to help out the entire needy population too.

                    </p>
                    <p className="pt-5">
                        Seeing how desperate the situation was in Zimbabwe, Taida began searching for pre-loved and second-hand items that would be useful for anyone in need back in Zimbabwe. Once she was certain that this would indeed help people in need, Taida told her friends and family about her initiative. The overwhelming response and support she received, made her more resolute. She started a crowdfunding campaign, “Fill a Backpack for Zimbabwe”. Though the basis of the campaign was to crowdfund individual backpacks for struggling families in Zimbabwe, the campaign held a much deeper meaning. Each backpack was packed with love with the hope that it would bring a smile to everyone who got the backpack. The backpack served as a reminder to everyone that they are loved, remembered and will be taken care of.

                    </p>
                    <p className="pt-5">
                        The community response to the crowdfunding campaign was exceptional to the point that Taida’s lounge and bedroom were filled with things she kept receiving from supporters of the initiative. Taida decided to take the leap and founded the Chozen Foundation with the sole purpose of helping out disadvantaged and vulnerable communities in Zimbabwe. Having been raised by a single mother, Taida understands too well the struggles and hardships people in Zimbabwe are facing, their situations made worse by the ongoing pandemic. An African proverb states that “It takes a village to raise a child”, the same goes for the beneficiaries of the Chozen Foundation. Only when a community comes together to support and uplift one another, can all grow and prosper. As Chozen Foundation continues working under its founders’ able guidance, Taida envisions establishing a village through the support of Chozen Foundation’s community.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutFounderStory;