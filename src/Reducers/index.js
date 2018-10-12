import {combineReducers} from 'redux';//el combine es no mas que una funcion que esta esperando un objeto y este objeto va a tener los nombre de los reducer
import {cities} from './Cities';
import {city} from './City';

export default combineReducers({
    cities,
    city
});