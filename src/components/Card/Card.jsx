import PropTypes from 'prop-types'
import Ingredients from '../Ingredients/Ingredients';
import { MdAccessTime  } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Card = ({card, handleAddToCook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = card;
    
    return (
        <div className='border-2 border-slate-500 p-5 leading-8'>
            <img className='rounded-lg' src={recipe_image} alt="" />
            <h1 className='font-semibold text-[20px]'>{recipe_name}</h1>
            <p>{short_description}</p>
            <hr/>
            <h1 className='font-semibold text-lg'>Ingredients: {ingredients.length}</h1>
            {
                ingredients.map((item, idx) => <Ingredients key={idx} item={item}></Ingredients>)
            }
            <div className='flex justify-between mt-2'>
                <p className='flex items-center gap-2'><MdAccessTime/>{preparing_time} min</p>
                <p className='flex items-center gap-2'><FaFire/>{calories} calories</p>
            </div>
            <button className='bg-[#0BE58A] px-5 py-1 rounded-3xl font-semibold mt-3' onClick={() => handleAddToCook(card)}>Want to Cook</button>
        </div>
    );
};

export default Card;

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddToCook: PropTypes.func.isRequired
}