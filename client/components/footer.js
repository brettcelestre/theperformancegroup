import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';

import Home from '../containers/home.js';

class Footer extends Component {
  
  constructor(props) {
    super(props);
    
    this.city = '';
  }
  
  alertWeather() {
    console.log('weather is: ', this.props.weather);
  }
  
  render() {
    return (
      <footer className='footer'>
        <h2>Footer</h2>
      </footer>
    );
  }
}

function mapStateToProps(state) {
 return state;
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ getWeatherData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
