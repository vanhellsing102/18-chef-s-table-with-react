import PropTypes from 'prop-types';

const Calculation = ({times, calories}) => { 
    return (
        <div className="grid grid-cols-2 mt-4">
            <h1>{times}</h1>
            <h1>{calories}</h1>
        </div>
    );
};

export default Calculation;

Calculation.propTypes = {
    times: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired
}