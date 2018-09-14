import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import TransformWeather from '../../Services/TransformWeather';
import CircularProgress from '@material-ui/core/CircularProgress';

const ApiKey = "f6864fe6cb9c912b244a29b250e1aaea";
const url = "http://api.openweathermap.org/data/2.5/weather"


class WeatherLocation extends Component{

	constructor({city}) {//parte del ciclo de vida
		super();
		this.state = {
			city,
			data: null,
		};
	};
	componentWillMount() { //antes que se monte el compoenente
		const {city} = this.state;
		const api_weather = `${url}?q=${city}&appid=${ApiKey}`;
		//console.log(api_weather);
		fetch(api_weather).then(data => {
		//	console.log(data);
				return data.json();
			}).then(weather_data => {
				const data = TransformWeather(weather_data);
				this.setState({data})
		});
	}
	
	
	render() {//parte del ciclo, al principio y siempre que hay un cambio
		//console.log("Component Render");
		const {onWeatherLocationClick} = this.props;
		const {data, city} = this.state;
		return(
			<div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
				<Location city = {city}></Location> 
				{data ? <WeatherData data ={data}></WeatherData> :  <CircularProgress size={50} thickness={6}/>}
				
			</div>
		);
	};
};

export default WeatherLocation;


	//	console.log(weather_data); aqui se ve la diferencia que esta todo armado
		//console.log('Component will mount');

	/*handleUpdateClick = () =>{
		fetch(api_weather).then(data => {
		//	console.log(data);
			return data.json();
		}).then(weather_data => {
			const data = TransformWeather(weather_data);
			this.setState({data})
		//	console.log(weather_data); aqui se ve la diferencia que esta todo armado
		});
		/*this.setState({
				//city: "Buenos Aires!", solo se pasa lo que se modifica
				data: data2,
			});
		console.log('Actualizado');*/
	


	/*componentDidMount() {//cuando el componente esta monstado
		console.log("Component did moun");
	}
	componentWillUpdate() {//cada vez que se actualiza el  componenete, no se hace la pruiera vez a diferencia del render
		console.log("componenet will update");
		
	}
	componentDidUpdate() { //despues de actualizarse
		console.log("component did update")		
	}*/