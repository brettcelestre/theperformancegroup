import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';


class MarketPlace extends Component {
  // States
  constructor(props) {
    super(props);
      
    this.state = {
      city: ''
    }
    
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ city: event.target.value });
  }

  // onFormSubmit
  onFormSubmit(event) {
    event.preventDefault();

    console.log('submitting:', this.state.city);
    
    // Invokes getWeatherData from '../actions/index.js' - imported at top
    this.props.getWeatherData(this.state.city);
  }    

  // Render
  render() {
    return (
      <h2>MarketPlace</h2>
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
