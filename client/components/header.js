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
                <Link to='/home' className='link'>
                  <div>Home</div>
                </Link>
                <Link to='/about' className='link'>
                  <div>About</div>
                </Link>
                <Link to='/services' className='link'>
                  <div>Services</div>
                </Link>
                <Link to='/marketplace' className='link'>
                  <div>Market Place</div>
                </Link>
                <Link to='/news' className='link'>
                  <div>News</div>
                </Link>
                <Link to='/contact' className='link'>
                  <div>Contact Us</div>
                </Link>
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
