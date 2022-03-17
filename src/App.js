import Header from './Components/Header/Header';
import Counter from './Components/Counter/Counter';
import Input from './Components/Input/Input';
import ResetButton from './Components/ResetButton/ResetButton';
import './custom.css';

function App() {

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
      <Counter />
      <Input />
      <ResetButton />
      </div>
    </div>
  );
}

export default App;
