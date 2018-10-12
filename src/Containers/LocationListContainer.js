import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setSeletedCity} from './../Actions';
import LocationList from './../Components/LocationList';

class LocationListContainer extends Component {
    handleSelectedLocation = city =>{
        //this.setState({ city });
        this.props.setCity(city);
        //const action = {type: 'setCity', value: city};
        // store.dispatch(setCity(city));

	}
    render() {
        return (
            <LocationList
                cities = {this.props.cities}
                onSelectedLocation = {this.handleSelectedLocation} > 
             </LocationList>

        );
    }
}

LocationListContainer.propTypes = {
    setcity: PropTypes.func.isRequired,
    city: PropTypes.array.isRequired,

};

const mapDispatchToProps = (dispatch) =>({//esto mapea las funciones
    setCity: value => dispatch(setSeletedCity(value))//no hay necesidad de que coincidan los setcity, por ejemplo. 
});
export default connect(null, mapDispatchToProps)(LocationListContainer);
