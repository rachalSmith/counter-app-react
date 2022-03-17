import { combineReducers } from 'redux';


import counterReducer from './counter';
import multiplierReducer from './input';


const rootReducer = combineReducers({
    counterReducer: counterReducer,
    multiplierReducer: multiplierReducer

})

export default rootReducer;


