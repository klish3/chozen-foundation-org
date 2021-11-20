import { HomeGridCardObj } from "../../../Models/home-grid-obj.model";
import HomeGridCard from "./HomeGridCard";

let homegridObj: HomeGridCardObj[] = [{
    title: 'mission',
    desc: 'Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.',
    color: 'warning'
},
{
    title: 'vision',
    desc: 'Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.',
    color: 'error'
},
{
    title: 'values',
    desc: 'Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.',
    color: 'primary'
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