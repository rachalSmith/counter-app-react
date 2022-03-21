import { useSelector } from 'react-redux';

function Counter() {


    const reduxCounterValue = useSelector(state => state.counterReducer.counterValue);


    return (
      <div className="mb-4">
        <h1>Counter: {reduxCounterValue}</h1>
      </div>
    );
}

export default Counter;


