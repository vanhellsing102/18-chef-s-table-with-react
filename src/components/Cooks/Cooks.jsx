import { useState } from "react";
import Cook from "../Cook/Cook";
import PropTypes from 'prop-types';
import Preparing from "../Preparing/Preparing";
import Calculation from "../Calculation/Calculation";


const Cooks = ({cards}) => {

    const [preparing, setPreparing] = useState([]);
    const handleAddToPreparing = (card) =>{
        const newPreparing = [...preparing, card];
        setPreparing(newPreparing);      
    }

    const [times, setTimes] = useState(0);
    const [calories, setCalories] = useState(0);
    const handleAddToTime = (time, oldCalories) =>{
        const newTime = times + time;
        setTimes(newTime);
        const newCalories = oldCalories + calories;
        setCalories(newCalories);   
    }   

    return (
        <div className="md:w-1/3 w-full border-2 border-slate-500 p-5 text-center">
            <h1 className="font-semibold text-[20px] pb-5">Want to Cook: {cards.length}</h1>
            <hr />
            <table className="table table-zebra w-full">
                <thead>
                    <tr className="*:font-bold text-xl text-black">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
            </table>
            {
                cards.map((card, idx) => <Cook key={idx} card={card} handleAddToPreparing={handleAddToPreparing} handleAddToTime={handleAddToTime}></Cook>)
            }
            <h1 className="font-semibold text-[20px] pb-5 mt-7">Currenty Cooking:{preparing.length}</h1>
            <hr />
            <table className="table table-zebra w-full">
                <thead>
                    <tr className="*:font-bold text-xl text-black">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
            </table>
            {
                preparing.map((card, idx) => <Preparing key={idx} card={card}></Preparing>)
            }
            <div className="grid grid-cols-2 mt-10 text-xl font-semibold">
                <h3>Total Time =</h3>
                <h3>Total Calories =</h3>
            </div>
            <Calculation times={times} calories={calories}></Calculation>
        </div>
    );
};

export default Cooks;

Cooks.propTypes = {
    cards: PropTypes.array.isRequired,
}