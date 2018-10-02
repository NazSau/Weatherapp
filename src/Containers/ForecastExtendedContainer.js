import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../Components/ForecastExtended';
import {connect} from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && 
                <ForecastExtended city={this.props.city} />
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};
const mapStateToProps = ( {city} ) => ({ city });

//const mapStateToProps = state =>({ city: state.city });
export default connect(mapStateToProps, null)(ForecastExtendedContainer);