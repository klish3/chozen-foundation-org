import { HomeGridCardObj } from "../../../Models/home-grid-obj.model";
import HomeGridCard from "./HomeGridCard";
import './HomeGrid.scss';

let homegridObj: HomeGridCardObj[] = [{
    title: 'mission',
    desc: 'To be the catalyst of change for vulnerable and disadvanatged Zimbabweans',
    color: 'mission-card'
},
{
    title: 'vision',
    desc: 'A world where all Zimbabweans in need are supported to live meaningful and purposeful lives',
    color: 'vision-card'
},
{
    title: 'values',
    desc: 'Commitment \n Compassion \n Collaboration \n Conscientiousnes',
    color: 'values-card'
}];

const HomeGrid = () => {
    return (
        <div className="grid grid-cols-3 gap-2 mt-5">
            {homegridObj.map((item: HomeGridCardObj) =>
                <HomeGridCard {...item} />
            )}
        </div >
    );
}

export default HomeGrid;
