import PropTypes from 'prop-types';

function Counter({ counterValue }) {
    return (
      <div className="counter">
          <h1 data-testid="counter">{ counterValue }</h1>
      </div>
    );
}

export default Counter;

Counter.propTypes = {
  counterValue : PropTypes.number.isRequired
}

