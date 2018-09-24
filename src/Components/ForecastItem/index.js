import React, {Component} from 'react';
import WeatherData from './../WeatherLocation/WeatherData';


class ForecastItem extends Component {
	render(){
		const {weekDay, hour, data} = this.props;
		return(
			<div>
				<div>
					{weekDay} 
					Hora: {hour}hs
				</div>
				<WeatherData data={data}> </WeatherData>
			</div>
		);
	}
}

export default ForecastItem;