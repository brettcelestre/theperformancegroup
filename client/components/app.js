import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';

import Footer from '../components/footer.js';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.city = '';
  }
  
  alertWeather() {
    console.log('weather is: ', this.props.weather);
  }
  
  test() {
    alert('Home button was clicked');
  }
  
  render() {
    return (
      <div className='wrapper'>
        <h1>The Performance Group</h1>
        <ul role='nav'>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/marketplace'>Market Place</Link></li>
          <li><Link to='/news'>News</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        {this.props.children}
        <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
