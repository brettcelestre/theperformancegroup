import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Map } from '../components/map.js';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';
import { withGoogleMap, GoogleMap, Marker, GoogleMapLoader } from "react-google-maps";

class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  // initMap() {
  //   var uluru = {lat: -25.363, lng: 131.044};
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: uluru
  //   });
  //   var marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map
  //   });
  // }
  
  
      //   <GoogleMapLoader
      //   containerElement={
      //     <div
      //       style={{
      //         height: "100%",
      //       }}
      //     />
      //   }
      //   googleMapElement={
      //     <GoogleMap
      //       defaultZoom={3}
      //       defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      //     >
      //     </GoogleMap>
      //   }
      // />

            // Phil Costello, Managing Partner - pcostello@tpgsales.com
            // Steve Martinez, Managing Partner - smartinez@tpgsales.com 
            // Jerry Jenson, General Manager - jjenson@tpgsales.com

            // Tony Metz, Retired/Consultant - tmetz@tpgsales.com
  sendEmail() {
    console.log('email sent');
  }
            
  render() {
    return (
      <div className='contact-us'>
        <div id='map'>
        </div>

        <div className='container'>
          <div className='row center'>
            
            <div className='four columns'>
              Address<br />
              6673 Owens Drive, Pleasanton, CA 94588
            </div>
            <div className='four columns'>
              Phone<br />
              925-556-0512
            </div>
            <div className='four columns'>
              Fax<br />
              925-224-8713
            </div>
            
          </div>
        </div>

        <div className='contact-section'>
          <div className='container'>
            
            <form className='contact-form'>
              <h3>Contact us</h3>
              <div className="row">
                <div className="six columns">
                  <label>Your email</label>
                  <input className="u-full-width" type="email" placeholder="example@mailbox.com" id="emailInput" />
                </div>
                <div className="six columns">
                  <label>Who would you like to contact?</label>
                  <select className="u-full-width contact-options" id="exampleRecipientInput">
                    <option value="pcostello@tpgsales.com">Phil Costello, Managing Partner</option>
                    <option value="smartinez@tpgsales.com">Steve Martinez, Managing Partner</option>
                    <option value="jjenson@tpgsales.com">Jerry Jenson, General Manager</option>
                    <option value="tmetz@tpgsales.com">Tony Metz, Retired/Consultant</option>
                  </select>
                </div>
              </div>
              <label>Message</label>
              <textarea className="u-full-width email-content" placeholder="Drop us a line..." id="message"></textarea>
              <input className="button-primary" type="submit" value="Send" />
            </form>
            
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
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
