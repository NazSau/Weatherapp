import React, {Component} from 'react';
import WeatherData from './../WeatherLocation/WeatherData';


class ForecastItem extends Component {
	render(){
		const {weekDay, hour, data} = this.props;
		return(
			<div>
				<h2>
					{weekDay} 
					- {hour} hs
				</h2>
				<WeatherData data={data}> </WeatherData>
			</div>
		);
	}
}

export default ForecastItem;