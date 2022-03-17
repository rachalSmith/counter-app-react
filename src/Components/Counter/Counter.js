import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Counter({ counterValue }) {

    const reduxCounterValue = useSelector(state => state.value)

    return (
      <div className="mb-4">
        <h1>Redux Counter: {reduxCounterValue}</h1>
          <h1>{ counterValue }</h1>
      </div>
    );
}

export default Counter;

Counter.propTypes = {
  counterValue : PropTypes.number.isRequired
}

