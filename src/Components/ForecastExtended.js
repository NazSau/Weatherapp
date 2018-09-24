import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

/*const days = [
	"Lunes",
	"Martes",
	"Miercoles",
	"Jueves",
	"Vernes"
]
const data = {
	temperature: 10,
	humidity: 10,
	weatherState: 'normal',
	wind: "normal",
}*/

const ApiKey = "f6864fe6cb9c912b244a29b250e1aaea";
const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{

	constructor(){
		super();
		this.state = {forecastData: null}
	}
	componentDidMount(){

		const URL_forecast = `${url}?q=${this.props.city}&appid=${ApiKey}`;

		fetch(URL_forecast).then(
			data => (data.json())
		).then(
			wehater_data => {
				console.log(wehater_data);
			}
		)
	}

	renderForecastItemDays(){
		return "Datos del clima";
		//return(days.map(day => <ForecastItem weekDay={day} hour={10} data={data}> </ForecastItem>));
	}
	renderProgress = () => {
		return "Cargando pronostico extendido...";

	}
	render(){
		const {city} = this.props;
		const {forecastData} = this.state;
		return (
			<div>
				<h2 className='Forecast-title'>
					Pronostico extendido para {city}
				</h2>
				{	forecastData ?
						this.renderForecastItemDays():
						this.renderProgress()
				}
			</div>
		);
	}
}
ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
}

export default ForecastExtended;