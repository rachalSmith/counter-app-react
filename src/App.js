import './App.css';
import Header from './Components/Header/Header';
import Counter from './Components/Counter/Counter';
import Input from './Components/Input/Input';
import ResetButton from './Components/ResetButton/ResetButton';

import { useState } from 'react';

function App() {

  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  const addToCounter = () => {
      setCounterValue(counterValue + inputValue);
  }


  const substractFromCounter = () => {
      setCounterValue(counterValue - inputValue);
  }


  const updateValue = (event) => {
    setInputValue(parseInt(event.target.value));
  }

  const resetValues = () => {

    setCounterValue(0);
    setInputValue(parseInt(1));
  }

  return (
    <div className="container">
      <Header />
      <Counter counterValue={counterValue}/>
      <Input
          inputValue={inputValue}
          addToCounter={addToCounter}
          substractFromCounter={substractFromCounter}
          onChange={updateValue}
      />
      <ResetButton resetValues={resetValues} />
    </div>
  );
}

export default App;
