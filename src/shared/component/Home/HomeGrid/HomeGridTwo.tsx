

import home5 from '../../../../assets/images/home_5.jpg';
import home2 from '../../../../assets/images/home_2.jpg';
import home3 from '../../../../assets/images/home_3.jpg';
const HomeGridTwo = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-5">
            <div className="card shadow-xl image-full text-center">
                <figure>
                    <img alt="" src={home5} />
                </figure>
                <div className="justify-end card-body">
                    <h2 className="font-bold">BECOME A CHOZEN CHAMPION</h2>
                </div>
            </div>

            <div className="card shadow-xl image-full text-center">
                <figure>
                    <img alt="" src={home2} />
                </figure>
                <div className="justify-end card-body">
                    <h2 className="font-bold">HOW TO MAKE A DONATION</h2>
                </div>

            </div>

            <div className="card shadow-xl image-full text-center">
                <figure>
                    <img alt="" src={home3} />
                </figure>
                <div className="justify-end card-body">
                    <h2 className="font-bold">BUILDING COMMUNITIES</h2>
                </div>
            </div>
        </div>
    );
}

export default HomeGridTwo;