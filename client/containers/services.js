import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';


class Services extends Component {
  
  componentDidMount() {
    window.scrollTo(0,0);
  }  
  
  render() {
    return (
      <div className='services'>
      
        <div className='drop-shadow'>
        </div>
      
        <div className='services-banner'>
        </div>
      
        <h2>Services</h2>
      </div>
    );  
  }
}

// Pulls state data through Redux
function mapStateToProps(state) {
   return state;
}
// Sending action outbound through Redux dispatch
function mapDispatchToProps(dispatch) {
   return bindActionCreators({ getWeatherData }, dispatch);
}
//
// Connects to state data
export default connect(mapStateToProps, mapDispatchToProps)(Services);
