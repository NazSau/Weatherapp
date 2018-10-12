import transformForecast from './../Services/transformForecast';

export const SET_CITY = 'SET_CITY';//ESTO ES POR CONVENSION DE CONSTANTES
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setCity = (payload) =>( {type: SET_CITY, payload}  );//por convencion es payload es lo mismo que value
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const ApiKey = "f6864fe6cb9c912b244a29b250e1aaea";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSeletedCity = payload =>{
    return dispatch => {//esto lo da el middlware
        //
        const URL_forecast = `${url}?q=${payload}&appid=${ApiKey}`;
        
        //accion inicial en el cual se establece que se hace una buscada, se activa en el estado un indicador de busqueda de datos
        dispatch(setCity(payload));

		return fetch(URL_forecast).then(
			data => (data.json())
		).then(
			wehater_data => {
				const forecastData = transformForecast(wehater_data);
                console.log(forecastData);
                // modificar el estado con el resultado de la primise, con el request(fetch)
                dispatch(setForecastData({city: payload, forecastData}));
			}
		);
    };
};