import PropTypes from 'prop-types';

const Ingredients = ({item}) => {
    return (
        <div className="leading-[15px]">
            <li>{item}</li>
        </div>
    );
};

export default Ingredients;

Ingredients.propTypes = {
    item: PropTypes.array.isRequired
}