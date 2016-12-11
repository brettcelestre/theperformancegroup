import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';


class MarketPlace extends Component { 
  
  componentDidMount() {
    window.scrollTo(0,0);
  } 

  // Render
  render() {
    return (
      <div className='marketplace'>
      
        <div className='drop-shadow'>
        </div>
      
        <div className='marketplace-banner'>
        </div>
      
        <div className='container section-spacer'>
          
          <div className='row'>
            <h3 className='section-header'>Marketplace</h3>
            <img src='../assets/imgs/marketplace-info.jpg' className='center' width='700px' height='458px' />
          </div>
          
          <div className='row'>
            <h3 className='section-header'>Clients</h3>
          </div>
          
          <div className='row'>
            <h3 className='section-header'>Customers</h3>
          </div>
        
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace);
