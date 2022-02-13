
import pic09 from '../../../assets/images/chozen_trans_logo.png';
const TopNavHeader = () => {

    return (
        <div>
            <nav className="bg-white border-gray-600 rounded dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto">
                    <a href="./" className="flex">
                        <img alt="https://picsum.photos/id/1005/600/600" src={pic09} className="h-10" />
                    </a>

                    <div className="flex md:order-2">
                        {/* <div className="hidden relative mr-3 md:mr-0 md:block">
                            <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="email-adress-icon" className="block p-2 pl-10 h-full w-full border-none text-gray-900 sm:text-sm" placeholder="" />
                        </div> */}
                        <div className='w-40 h-20 background bg-orange-500 text-center font-bold text-2xl'>
                            <a href='/donate'>
                                <div className="w-full h-20 mt-6 text-white">
                                    DONATE
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </nav>

        </div>
    );

}

export default TopNavHeader;