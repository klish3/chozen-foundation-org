import pic09 from '../../assets/images/home_2.jpg';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-transparent">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <img alt="https://picsum.photos/id/1005/600/600" src={pic09} className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">
                            Hello there
                        </h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem quasi.In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;