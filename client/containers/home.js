import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';


class Home extends Component {
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
			<div className='home'>
				
				<div className='drop-shadow'>
				</div>
				
				<div className='banner'>
				</div>
				
				<div className='container'>
					<div className='row'>
						<h4>Why We Started</h4>
					</div>
					<div className='row'>
						<p>The evolution of the traditional food broker has led to the formation of large Regional and National organizations. Regardless of size, these companies were all faced with the same problems:</p>
					</div>
					<div className='row'>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
					</div>
					<div className='row'>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
					</div>
					<div className='row'>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
						<div className='one-third column'>
							<h6>logo</h6>
						</div>
					</div>
				</div>
				
				<div className='key-dynamics'>
					<div className='container'>
						<div className='row'>
							<h4>Key Dynamics</h4>
						</div>
						<div className='row'>
							<p> copy </p>
						</div>
						<div className='row'>
							<p> bullet point copy </p>
						</div>
					</div>
				</div>
				
				<div className='lets-talk'>
					<div className='container'>
						<div className='row'>
							<div className='eight columns'>
								<div className='row'>
									<h2>Lets Talk</h2>
								</div>
								<div className='row'>
									<p> copy </p>
								</div>
							</div>
							<div className='four columns'>
								<button>CONTACT</button>
							</div>
						</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
