import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';

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
        <div className='container'>
          <div className='row footer-content'>
            <div className='three columns'>
              <img src='../assets/imgs/footer-logo.png' width='206px' height='50px' />
              <p>
                6673 Owens Drive
                Pleasanton, CA 94588
                Email: contact@tpgsales.com
                Phone: (925) 555-5555
              </p>
            </div>
            <div className='three columns'>
              <p>Company</p>
            </div>
            <div className='three columns'>
              <p>Services</p>
            </div>
            <div className='three columns'>
              <p>Market Place</p>
            </div>
          </div>
        </div>
        <div className='container'>
          <h5>2016 THE PERFORMANCE GROUP. ALL RIGHTS RESERVED.</h5>
        </div>
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
