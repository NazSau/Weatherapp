import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../Services/transformForecast'
import './styles.css';

const renderForecastItemDays = (forecastData) =>{
	//return <h1>Render del clima</h1>;
	return(
			forecastData.map(forecast => 
				<ForecastItem
				key={`${forecast.weekDay}-${forecast.hour}`}
				weekDay={forecast.weekDay}
				hour={forecast.hour} 
				data={forecast.data}> </ForecastItem>)
			);
} 

const renderProgress = () => {
	return "Cargando pronostico extendido...";

}

const ForecastExtended = ({city, forecastData}) => (

	<div>
		<h2 className='Forecast-title'>
			Pronostico extendido para {city}
		</h2>
		{	forecastData ?
				renderForecastItemDays(forecastData)://functional componene no va con this
				renderProgress()
		}
	</div>
	
);
ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
}

export default ForecastExtended;