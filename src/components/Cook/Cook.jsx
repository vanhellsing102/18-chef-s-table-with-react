import PropTypes from 'prop-types';

const Cook = ({card, handleAddToPreparing, handleAddToTime}) => {
    const {recipe_name, recipe_id, preparing_time, calories} = card;
    
    return (
        <div className="mt-5">
            <table className='className="table table-zebra w-full'>
                <tbody>
                    <tr>
                        <td>{recipe_id}</td>
                        <td>{recipe_name}</td>
                        <td>{preparing_time} min</td>
                        <td>{calories} calories</td>
                        <td>
                            <button className='bg-[#0BE58A] px-3 py-1 rounded-xl font-semibold' onClick={() =>{ handleAddToPreparing(card); handleAddToTime(card.preparing_time, card.calories)}}>Preparing</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cook;

Cook.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddToPreparing: PropTypes.func.isRequired,
    handleAddToTime: PropTypes.func.isRequired
}