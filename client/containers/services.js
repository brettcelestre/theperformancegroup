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
      
        <div className='container section-spacer'>
          <div className='row'>
            <h3 className='section-header'>Services</h3>
            <div className='copy'>
              With over 75 combined years of experience in the Northern California Market, we offer:
            </div>
          </div>
          
          <div className='row copy'>
            - Local Ownership with unequaled reputation/respect in the market.<br />
            - We are committed to independent, entrepreneurial & participative ownership.<br />
            - We are not burdened by traditional broker thinking and actions.<br />
            - We are a results driven sales services provider.<br />
            - Account management, coordination and communication, locally or nationally.<br />
            - Ongoing enhancement of administrative support services.<br />
            - Ongoing infrastructure investment, refinement and development.<br />
            - We feel strongly about reinvesting in our business.<br />
            - Category experience and expertise in:<br />
                  <div className='tab'>Grocery<br />
                  Refrigerated<br />
                  Frozen Food<br />
                  Confection & Snack Foods<br />
                  Specialty Foods<br />
                  Non-Foods<br />
                  Ethnic</div>
            - Safeway Corporate coverage:<br />
                  <div className='tab'>Headquarter Coverage<br />
                  Order entry/Deduction management<br />
                  Tracking<br />
                  Forms Management<br />
                  Fund Management<br />
                  Excellent Communication</div>
            - We strive to be problem solvers and solution providers.<br />
            - Our services are tailored to compliment your strengths and help you to reach your goals.<br />
            - Coverage for all classes of trade.<br />
            - Complete retail menu of services.
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
export default connect(mapStateToProps, mapDispatchToProps)(Services);
