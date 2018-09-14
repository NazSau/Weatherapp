import React from 'react';
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from '../../../Constants/Weathers';
import PropTypes from 'prop-types';
import './styles.css';

const stateToIconName = weatherState => {
	switch (weatherState) {
		case CLOUD:
			return "cloud"
		case CLOUDY:
			return "cloudy"
		case SUN:
			return "day-sunny";
		case RAIN:
			return "rain";
		case SNOW:
			return "snow";
		case WINDY:
			return "windy";
		case THUNDER: 
			return "day-thunderstorm";
		case DRIZZLE:
			return "day-showers";
		default:
			return "day-sunny";
	}
}
const getWeatherIcon = weatherState =>{
	return (<WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" />);

}
const WeatherTemperature  =({temperature, weatherState}) =>{
	return (
		<div className = 'WeatherTemperatureCont'>
			{getWeatherIcon(weatherState)}
			
			<span className="Temperature" >
				{`${temperature}`}
			</span>
			<span className="TemperatureType" >
				 C°
			</span>
		</div>
	);
};

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired,
};


export default WeatherTemperature;