import { combineReducers } from 'redux';


import counterReducer from './counter';
import multiplierReducer from './input';


const rootReducers = combineReducers({
    counterReducer,
    multiplierReducer
  })

  export default rootReducers;

