import PropTypes from 'prop-types';

const Preparing = ({card}) => {
    const {recipe_name, preparing_time, calories, recipe_id} = card;
    
    return (
        <div className="mt-5">
            <table className='className="table table-zebra w-full'>
                <tbody>
                    <tr>
                        <td>{recipe_id}</td>
                        <td>{recipe_name}</td>
                        <td>{preparing_time} min</td>
                        <td>{calories} calories</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Preparing;

Preparing.propTypes = {
    card: PropTypes.object.isRequired
}