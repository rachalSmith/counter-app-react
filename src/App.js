import Header from './Components/Header/Header';
import Counter from './Components/Counter/Counter';
import Input from './Components/Input/Input';
import ResetButton from './Components/ResetButton/ResetButton';
import './custom.css';

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
    <div className="main-custom
                    container-fluid
                    d-flex
                    flex-column
                    align-items-center
                    p-5">
      <Header/>
      <div className="card
                      col-sm-6
                      align-items-center
                      p-5
                      shadow
                      mb-5
                      bg-body
                      rounded">
      <Counter counterValue={counterValue}/>
      <Input
          inputValue={inputValue}
          addToCounter={addToCounter}
          substractFromCounter={substractFromCounter}
          onChange={updateValue}
      />
      <ResetButton resetValues={resetValues} />
      </div>
    </div>
  );
}

export default App;
