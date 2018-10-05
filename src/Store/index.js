import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {city} from './../Reducers/City';
const intialState = {
    city: 'Buenos Aires,ar'
};

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(city, intialState, composeEnhacers(applyMiddleware(thunk)));
 //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());