
import pic01 from '../assets/images/home_page_1.png';
import pic02 from '../assets/images/home_page_2.png';
import pic03 from '../assets/images/home_page_3.png';
const LandingSectionTwo = () => {
    return (
        <div>
       
            <article>
                <div className="box alt">
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-4"><span className="image fit"><img src={pic01} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic02} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={pic03} alt="" /></span></div>
                    </div>
                </div>
            </article>

        </div>


    );
}

export default LandingSectionTwo;