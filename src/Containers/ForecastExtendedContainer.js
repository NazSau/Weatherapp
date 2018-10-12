import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../Components/ForecastExtended';
import {connect} from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return (
            city && 
                <ForecastExtended city={city} forecastData={forecastData} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};
const mapStateToProps = ( {city, cities} ) => ({ city, forecastData: cities[city] && cities[city].forecastData });

//const mapStateToProps = state =>({ city: state.city });
export default connect(mapStateToProps, null)(ForecastExtendedContainer);