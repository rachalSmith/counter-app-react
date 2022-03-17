import { useSelector } from 'react-redux';

function Counter() {

    const reduxCounterValue = useSelector(state => state.counterValue)


    return (
      <div className="mb-4">
        <h1>Counter: {reduxCounterValue}</h1>
      </div>
    );
}

export default Counter;


