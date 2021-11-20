import { HomeGridCardObj } from "../../../Models/home-grid-obj.model";


const HomeGridCard = (hcObj: HomeGridCardObj) => {

    const cardStyle = `card rounded-none shadow-2xl lg:card-side bg-${hcObj.color} text-primary-content`
    return (
        <div className={cardStyle}>
            <div className="card-body text-center">
                <div className="border-2 border-opacity-100 w-12 h-7 mx-auto">OUR</div>
                <div className="divide-y">
                    <h2 className="card-title text-accent text-4xl">{hcObj.title}</h2>
                    <p>{hcObj.desc}</p>
                </div>
            </div>
        </div>
    );
}

export default HomeGridCard;