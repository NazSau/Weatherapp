import {createStore} from 'redux';
import {city} from './../Reducers/City';
const intialState = {
    
};

export const store = createStore(city, intialState,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());