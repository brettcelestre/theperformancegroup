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
              <img src='../assets/imgs/footer-logo.png' width='206px' height='50px' /><br />
              6673 Owens Drive<br />
              Pleasanton, CA 94588<br />
              Email: contact@tpgsales.com<br />
              Phone: (925) 555-5555
            </div>
            <div className='three columns'>
              <span className='footer-title'>COMPANY</span><br /><br />
              <Link to='/about' className='link footer-link'>
                <span>About</span>
              </Link><br />
              <Link to='/news' className='link footer-link'>
                <span>News</span>
              </Link><br />
              <Link to='/contact' className='link footer-link'>
                <span>Contact</span>
              </Link>
            </div>
            <div className='three columns'>
              <span className='footer-title'>SERVICES</span><br /><br />
              <Link to='/about' className='link footer-link'>
                <span>FAKE LINK</span>
              </Link><br />
              <Link to='/news' className='link footer-link'>
                <span>FAKE LINK 2</span>
              </Link>
            </div>
            <div className='three columns'>
              <span className='footer-title'>MARKETPLACE</span><br /><br />
              Clients<br />
              Customers
            </div>
          </div>
        </div>
        <div className='divider-dark'>
        </div>
        <div className='container copyright'>
          Copyright © 2016 The Performance Group. All rights reserved.
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
