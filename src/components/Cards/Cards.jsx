import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from 'prop-types';


const Cards = ({handleAddToCook}) => {

    const [cards, setCards] = useState([]);
    useEffect(() =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    

    return (
        <div className="md:w-2/3 w-full">
            <div className="grid grid-cols-2 gap-4">
                {
                    cards.map(card => <Card key={card.recipe_id} card={card} handleAddToCook={handleAddToCook}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;

Cards.propTypes = {
    handleAddToCook: PropTypes.func.isRequired
}

