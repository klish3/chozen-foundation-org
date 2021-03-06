import { Activity, LifeBuoy } from "react-feather";
import AbouFounderStory from "./AbouFounderStory";
import { AboutFeatures } from "./AboutFeatures";


const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
            Chozen Foundation, is a <br /> not-for-profit foundation, established in 2021 <br /> by Taida Chigogora.
          </h2>
        </div>
        <div className="lg:w-1/2 text-base text-gray-700 md:text-lg">
          <p>
            The foundation serves vulnerable and disadvantaged people and communities in Zimbabwe. The natural disasters and the socio-economic situation prevalent in Zimbabwe have left the local communities devastated and wanting for basic necessities. The foundation works in these communities to help them overcome the countless obstacles and create a more sustainable living.
          </p>
          <p className="pt-5">
            Through its various programs, Chozen Foundation reaches both children and adults to empower them in their individual and collective situations. The foundation works with local communities and organizations to help build a more equivalent society. The foundation is also actively involved in mobilizing global support for its programs. The various supporters, donors and volunteers help keep the vision of the foundation alive.
          </p>
        </div>
      </div>
      <div className="mt-5 grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-2">
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <Activity />
          </div>
          <h6 className="mb-2 font-semibold leading-5">OUR MISSION</h6>
          <p className="mb-3 text-sm text-gray-900">
            Chozen Foundation was started with the mission of building a bridge of hope and care to Zimbabwe.
            We aim to achieve this by delivering sustainable life-long changes in the livelihoods of the beneficiaries in Zimbabwe. Our mission is not to provide a one-time help to the disadvantaged and vulnerable Zimbabweans but to create a long-lasting impact on communities and to enable them to become self-sufficient and lead socially and economically sustainable lives.
          </p>
        </div>
        <div className="max-w-md">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <LifeBuoy />
          </div>
          <h6 className="mb-2 font-semibold leading-5">OUR VISION
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Through our work and the support of our community, we are working towards creating an environment where the disadvantaged people of Zimbabwe are provided with the necessary and adequate support to live independent, purposeful and meaningful lives.
          </p>

        </div>
      </div>
      <AboutFeatures />

      <hr />
      <AbouFounderStory />
    </div>
  );
};

export default About;