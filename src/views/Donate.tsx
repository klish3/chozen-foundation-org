import React from "react";

export const Donations: React.FC = () => {
  return (
    <div id="wrapper">
      {/* <!-- Header --> */}
      <header id="header">
        <a href="/" className="logo">
          Donate
        </a>
      </header>

            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Bank
                  <br className="hidden md:block" />
                  Transfer{' '}
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="mb-4 text-base text-gray-700">
                  <u>NAME:</u> <br />CHOZEN FOUNDATION INC <br />
                  <u>BSB:</u><br /> 013400 <br />
                  <u>ACCOUNT:</u><br />  155254806 <br />
                </p>

              </div>
            </div>
          
          </div>
     
  
  );
};
export default Donations;
