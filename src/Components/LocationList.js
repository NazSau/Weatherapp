import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import {Grid, Row, Col} from  'react-flexbox-grid';
import './styles.css';



const LocationList = ({cities, onSelectedLocation}) => {

	const handleWeatherLocationClick = city =>{
		console.log("handleWeatherLocationClick");
		onSelectedLocation(city);
	}
	const StrToComponent = cities => {
		
	//	cities.map(city => (console.log(city)));

		return (
	//el map transfroma con la misma cantidad de elementos, no crea menos, o sea si tiene 3 sale 3 de otro
	//el problema es que el index no es algo exclusivo, cualquier componenete que se genere en un array deberia necesitar una key
	//es mejor usa city porque no se va a repetir
			cities.map((city, index) => 
				(
					<Col xs={12} md={12}>
					<WeatherLocation
						key = {city}
						city = {city}
						onWeatherLocationClick ={ () => handleWeatherLocationClick(city)}
					/>
					</Col>
				))
		);
	}
	return (
		<div className="LocationListCont">
			{StrToComponent(cities)}
		</div>
	);
}
LocationList.propTypes = {
	cities: PropTypes.array.isRequired,
	onSelectedLocation: PropTypes.func,
}
export default LocationList;