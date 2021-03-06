import React, {component} from 'react';
import convert from 'convert-units';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from '../Constants/Weathers';

const getTemperature = temp => {
	let celsius = parseFloat(convert(temp).from('K').to('C').toFixed(2));
	//console.log(celsius);
	return celsius;
}
const getWeatherState = weather => {
	const {id} = weather[0];

	if(id < 300){
		return THUNDER;
	} else {
		if (id < 400) {
			return DRIZZLE;
		}else {
			if (id < 600) {
				return RAIN;
			}else {
				if (id < 700) {
					return SNOW;
				}else {
					if (id === 800) {
						return SUN
					}else {
						return CLOUDY;
					}
				}
			}
		}
	}
	//return SUN;
}
const TransformWeather = (weather_data)  =>{
	const {weather} = weather_data; 
	const {humidity, temp} = weather_data.main;
	const {speed} = weather_data.wind;
	const weatherState = getWeatherState(weather);
	const temperature = getTemperature(temp);
	const data = {
		humidity,
		temperature,
		weatherState,
		wind: `${speed} m/s`,
	}
	return data;
}

export default TransformWeather;