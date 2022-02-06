import PropTypes from 'prop-types';

function Counter({ counterValue }) {
    return (
      <div className="mb-4">
          <h1>{ counterValue }</h1>
      </div>
    );
}

export default Counter;

Counter.propTypes = {
  counterValue : PropTypes.number.isRequired
}

