import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';

class Header extends Component {
  
  constructor(props) {
    super(props);
    this.city = '';
  }
  
  alertWeather() {
    console.log('weather is: ', this.props.weather);
  }

  render() {
    return (
      <div className='navigation'>
        <div className='container'>
          <div className='row'>
            <div className='four columns nav-logo'>
              <img src='../assets/imgs/nav-logo.png' width='246px' height='61px' />
            </div>
            <div className='eight columns'>
              <nav className='menu'>
                <div>
                  <Link to='/home'>Home</Link>
                </div>
                <div>
                  <Link to='/about'>About</Link>
                </div>
                <div>
                  <Link to='/services'>Services</Link>
                </div>
                <div>
                  <Link to='/marketplace'>Market Place</Link>
                </div>
                <div>
                  <Link to='/news'>News</Link>
                </div>
                <div>
                  <Link to='/contact'>Contact Us</Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
 return state;
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators({ getWeatherData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
