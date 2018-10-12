import {SET_FORECAST_DATA} from './../Actions';

export const cities = (state = {}, action) =>{
    switch (action.type) {
        case SET_FORECAST_DATA:
            const {city,  forecastData} = action.payload;
            return {...state, [city]: {forecastData}};//cuando pones entre corchetes algo lo dejas como si fuera la key 
        
        default:
            return state;
    }
}