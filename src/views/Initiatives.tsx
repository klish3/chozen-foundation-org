import { Heart } from 'react-feather';
import initImg1 from '../assets/images/home_page_1.png';
import initImg2 from '../assets/images/home_page_2.png';
export const Initiatives = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 mb-20">
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
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24 text-gray-800">
                        <svg className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" viewBox="0 0 293 362" fill="#00000" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_361_19)">
                                <path d="M229.6 222.65H62.6001C60.7436 222.65 58.9631 223.388 57.6503 224.7C56.3376 226.013 55.6001 227.794 55.6001 229.65V327.06C55.6001 328.917 56.3376 330.697 57.6503 332.01C58.9631 333.323 60.7436 334.06 62.6001 334.06H229.6C231.457 334.06 233.237 333.323 234.55 332.01C235.863 330.697 236.6 328.917 236.6 327.06V229.6C236.587 227.752 235.844 225.985 234.532 224.683C233.221 223.381 231.448 222.65 229.6 222.65V222.65ZM222.6 320.05H69.5801V271.35H90.4501V292.22C90.3452 293.197 90.4471 294.185 90.7491 295.119C91.0511 296.054 91.5464 296.915 92.2029 297.645C92.8593 298.376 93.6622 298.96 94.5594 299.361C95.4565 299.761 96.4278 299.967 97.4101 299.967C98.3924 299.967 99.3637 299.761 100.261 299.361C101.158 298.96 101.961 298.376 102.617 297.645C103.274 296.915 103.769 296.054 104.071 295.119C104.373 294.185 104.475 293.197 104.37 292.22V271.35H222.65L222.6 320.05ZM222.6 257.43H69.5801V236.56H222.65L222.6 257.43Z" />
                                <path d="M146.11 180.9C144.271 180.905 142.503 180.187 141.19 178.9L106.41 144.11C105.118 142.8 104.394 141.034 104.394 139.195C104.394 137.355 105.118 135.59 106.41 134.28V134.28L141.19 99.4999C142.5 98.2053 144.268 97.4792 146.11 97.4792C147.952 97.4792 149.72 98.2053 151.03 99.4999V99.4999L185.87 134.28C187.164 135.59 187.89 137.358 187.89 139.2C187.89 141.042 187.164 142.81 185.87 144.12L151.08 178.91C150.425 179.555 149.648 180.063 148.795 180.405C147.942 180.747 147.029 180.915 146.11 180.9V180.9ZM121.16 139.15L146.11 164.1L171.11 139.15L146.11 114.2L121.16 139.15Z" />
                                <path d="M271.35 201.77H264.35V132.2C264.331 111.796 257.423 91.9954 244.745 76.0073C232.067 60.0192 214.363 48.7798 194.5 44.11C193.363 32.0543 187.769 20.8563 178.814 12.7057C169.858 4.55521 158.184 0.0383301 146.075 0.0383301C133.966 0.0383301 122.292 4.55521 113.336 12.7057C104.381 20.8563 98.7873 32.0543 97.65 44.11C77.8 48.7934 60.1115 60.0386 47.4476 76.0255C34.7837 92.0123 27.8856 111.805 27.87 132.2V201.77H20.87C15.3389 201.789 10.0397 203.995 6.12955 207.907C2.21937 211.819 0.0158177 217.119 0 222.65V292.22C0.0158177 297.751 2.21937 303.051 6.12955 306.963C10.0397 310.876 15.3389 313.082 20.87 313.1H27.87V327.01C27.8753 336.235 31.5424 345.081 38.0656 351.604C44.5889 358.128 53.4347 361.795 62.66 361.8H229.66C238.886 361.797 247.734 358.131 254.257 351.607C260.781 345.084 264.447 336.236 264.45 327.01V313.1H271.45C276.981 313.082 282.28 310.876 286.19 306.963C290.101 303.051 292.304 297.751 292.32 292.22V222.65C292.304 217.102 290.087 211.786 286.155 207.871C282.223 203.956 276.898 201.762 271.35 201.77V201.77ZM27.87 299.18H20.87C19.0222 299.167 17.2545 298.424 15.9525 297.112C14.6506 295.801 13.9199 294.028 13.92 292.18V222.65C13.9199 220.802 14.6506 219.029 15.9525 217.718C17.2545 216.407 19.0222 215.663 20.87 215.65H27.87V299.18ZM164.97 41.7501H111.97C113.571 33.89 117.839 26.8247 124.051 21.7502C130.264 16.6757 138.039 13.9038 146.06 13.9038C154.081 13.9038 161.856 16.6757 168.069 21.7502C174.281 26.8247 178.549 33.89 180.15 41.7501H164.97ZM250.48 327.01C250.462 332.541 248.255 337.84 244.343 341.751C240.431 345.661 235.131 347.864 229.6 347.88H62.6C57.0698 347.864 51.7706 345.66 47.8602 341.75C43.9497 337.839 41.7458 332.54 41.73 327.01V132.2C41.7643 111.913 49.838 92.4659 64.1825 78.1196C78.5269 63.7733 97.9726 55.6971 118.26 55.6601H173.92C194.208 55.6971 213.655 63.773 228.001 78.119C242.347 92.465 250.423 111.912 250.46 132.2L250.48 327.01ZM278.31 292.22C278.31 294.077 277.573 295.857 276.26 297.17C274.947 298.483 273.167 299.22 271.31 299.22H264.31V215.69H271.31C273.167 215.69 274.947 216.428 276.26 217.74C277.573 219.053 278.31 220.834 278.31 222.69V292.22Z" />
                            </g>
                        </svg>

                    </div>
                    <h6 className="mb-3 text-xl font-bold leading-5">Fill a Backpack for Zimbabwe</h6>
                    <p className="mb-3 text-sm text-gray-900">
                        Fill a Backpack for Zimbabwe is Chozen Foundation’s flagship program that kickstarted the foundation’s journey of helping people and communities in Zimbabwe. The program mobilizes community support to gather and collect daily and essential supplies such as clothing, shoes, school stationery, baby blankets for the people of Zimbabwe who are in need.

                    </p>

                    <div className="relative flex w-100 items-center sm:mb-5">
                        <video className="mx-auto mt-7 rounded shadow-lg w-3/4" autoPlay loop>
                            <source src="https://firebasestorage.googleapis.com/v0/b/chozen-foundation.appspot.com/o/big_pack_2021_10%2Fbag_pack.mp4?alt=media&token=886fe61d-3516-4ad9-a967-86179c26474c" type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div className="max-w-md sm:mx-auto sm:text-center">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                        <Heart className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" />
                    </div>
                    <h6 className="mb-3 text-xl font-bold leading-5">Greater Love Initiative
                    </h6>
                    <p className="mb-3 text-sm text-gray-900">
                        For Valentine’s Day, 2021, Chozen Foundation wanted to do something special and memorable for children. So, we launched the Greater Love Initiative where Chozen Foundation donated food hampers, school supplies, sanitary ware and cleaning detergents to two children’s homes, namely, Tanyaradzwa Children’s Home and Simbaredenga Newstart Children’s Home.

                    </p>
                    <img
                        className="object-contain w-full rounded shadow-lg  mt-10 lg:rounded-none lg:shadow-none"
                        src={initImg1}
                        alt=""
                    />
                    <img
                        className="object-contain w-full rounded shadow-lg mt-10 lg:rounded-none lg:shadow-none"
                        src={initImg2}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};