const HomeGridTwo = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mt-5">



            <div className="card shadow-2xl lg:card-side bg-success text-primary-content image-full">
                <figure>
                    <img alt="" src="https://picsum.photos/id/1005/400/250" />
                </figure>
                <div className="justify-end card-body">
                    <h2 className="card-title">BECOME A CHOZEN CHAMPION</h2>
                </div>
            </div>

            <div className="card shadow-2xl lg:card-side bg-warning text-primary-content image-full">
                <figure>
                    <img alt="" src="https://picsum.photos/id/1005/400/250" />
                </figure>
                <div className="justify-end card-body">
                    <h2 className="card-title">HOW TO MAKE A DONATION</h2>
                </div>

            </div>

            <div className="card shadow-xl image-full">
                <figure>
                    <img alt="" src="https://picsum.photos/id/1005/400/250" />
                </figure>
                <div className="justify-end card-body">
                    <h2 className="card-title">BUILDING COMMUNITIES</h2>
                </div>
            </div>
        </div>
    );
}

export default HomeGridTwo;