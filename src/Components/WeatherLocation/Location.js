import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';


//const Location = (props) => {
const Location = ({city}) => {

	//podria ponerlo en props y que siga andando, o sea directamente lo tome como props
	//const city = props.city; es lo mismo que abajo
	//destructuring cuando tenemos una propiedad con un nombre y esta tiene el mismo nombre que la variable se la puede asignar inmediantamente como en city
	//const {city} = props; esto se usa con lo primerp
	//

	return (
		<div className="LocationCont">
			<h1>
				{city}
			</h1>
		</div>
	);
};
Location.propTypes = {
	city: PropTypes.string.isRequired,
}
export default Location;