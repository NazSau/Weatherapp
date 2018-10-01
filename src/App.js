import React, { Component } from 'react';
//import logo from './logo.svg';
import {connect} from 'react-redux';
import {Grid, Row, Col} from  'react-flexbox-grid';
import LocationList from './Components/LocationList';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import WeatherAppBar from './Services/WeatherAppBar.js';
import ForecastExtended from './Components/ForecastExtended';
import {setCity} from './Actions';
//import {store} from './Store';
import './App.css';



const cities = [
	"Buenos Aires,ar",
	"Bogota,col",
	"Santiago,chi",
	"Ciudad de México,mx",
	"Madrid,es",
//	"Washington dc,us",
];

class App extends Component {
	handleSelectedLocation = city =>{
        this.setState({ city });
		console.log(`handleSelectionLocationd ${city}` );
        //const action = {type: 'setCity', value: city};
        // store.dispatch(setCity(city));
        this.props.setCity(city);

	}
    constructor() {
        super();
        this.state = {city: null};//nunca mas puedo igualr el estado

    }
	render() {
        const {city} = this.state;
    	return (
            <div className="App">
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <WeatherAppBar/>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={6}>
                            <LocationList cities = {cities} onSelectedLocation = {this.handleSelectedLocation} > </LocationList>
                        </Col>
                        <Col xs={12} lg={6}>
                            <Paper elevation={14}>
                                <div className="detail"> 
                                    {
                                        city && 
                                        <ForecastExtended city={city}> </ForecastExtended>
                                        /* las 3 formas de escribirlo
                                        city ? 
                                            <ForecastExtended city={city}>
                                            </ForecastExtended> :
                                            <h1> No se selecciono ciudad </h1> */

                                       /* city ? 
                                            <ForecastExtended city={city}>
                                            </ForecastExtended> :
                                            null*/
                                    }
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </div>

        );
    }
}

// export default App;
App.propTypes = {
    setcity: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) =>({//esto mapea las funciones
    setCity: value => dispatch(setCity(value))//no hay necesidad de que coincidan los setcity, por ejemplo. 
});
export default connect(null, mapDispatchToProps)(App);
/*const AppConnected = connect(null, mapDispatchToProps)(App);//funcion que espera dos funciones como parametro y retorna otra funcion

export default AppConnected;*/

    		//el fluid lo que hace es que se alargue sin importar el tañao de pantalla, sin eso es como que queda un espacio en blanco
    		//fluid trata de usar 100% pantalla y sin eso tiene un anchio fijo
    	/*	//si las columnas son del mismo ancho no es necesario poner el espacio que ocupan, se dividen equivalentemente
    		<Grid fluid>
    			{//rl lineado se lo hace en row, tambien se puede utilizar la distribucion de espacio}
    			<Row>
    				<Col xs={12} sm={6} md={4}>
    					<div className='red'>
    						Roja
    					</div>
    				</Col>
    				<Col xs={12} sm={6} md={4}>
    					<div className='green'>
    						Verde
    					</div>
    				</Col>
    				<Col xs={12} sm={6} md={4}>
    					<div className='blue'>
    						Azul
    					</div>
    				</Col>
    			</Row>
    		</Grid>*/
