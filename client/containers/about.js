import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';


class About extends Component {
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
			<div className='about'>
				
				<div className='drop-shadow'>
				</div>
			
				<div className='mission-photo'>
				</div>
				
				<div className='container mission section-spacer'>
					<h3 className='section-header'> Our Mission</h3>
					
					<div className='row mission-terms'>
						<div className='three columns'>Integrity</div>
						<div className='three columns'>Service</div>
						<div className='three columns'>Innovation</div>
						<div className='three columns'>Commitment</div>
					</div>
					
					<div className='row offer'>
							To be the best solution provider of Strategic Sales Services in an environment that embraces our Company values.
					</div>
					
					<div className='divider'></div>
					
					<h3 className='section-header'>We Offer</h3>
					
					<div className='row offer v-center'>
						<div className='six columns'>
							<img src='../assets/imgs/writing.jpg' className='offer-img' />
						</div>
						<div className='six columns offer-copy'>
							New ways to examine problems and design solutions.
						</div>
					</div>
					
					<div className='row offer v-center'>
						<div className='six columns'>
							<img src='../assets/imgs/chart.jpg' className='offer-img' />
						</div>
						<div className='six columns offer-copy'>
							New ways to evaluate productivity and measure results.
						</div>
					</div>
					
					<div className='row offer v-center'>
						<div className='six columns'>
							<img src='../assets/imgs/work-partners.jpg' className='offer-img' />
						</div>
						<div className='six columns offer-copy'>
			          New ways to enjoy having fun while learning, growing and working together.
						</div>
					</div>
					
					<div className='row promise'>
						We deliver the promise!
					</div>

				</div>
						
						
						
				
				<div className='history'>
					<div className='container history-content section-spacer'>
						<h3 className='section-header'>History</h3>
						
	          <div className='row'>
	            <div className='two columns'>2002</div>
	            <div className='ten columns copy'>
	            	Company is founded by Phil Costello, Steve Martinez Tony Metz and assisted by TPG South. The Company opened with Phil Costello, Steve Martinez, Tony Metz and Laurie Withers.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2003</div>
	            <div className='ten columns copy'>
	            	Ron Ingram joins the Performance Group bringing years of experience in C Stores and Confection.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2004</div>
	            <div className='ten columns copy'>
	            	The Performance Group joins the newly formed Independent Food Broker’s Association.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2005</div>
	            <div className='ten columns copy'>
	            	With the addition of the Jelly Belly business in Northern California, 30+ Independent merchandisers are added to our coverage.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2006</div>
	            <div className='ten columns copy'>
	            	Julie Adam & Steve Celestre join the Performance Group as Senior Business Managers. The Company ends the year with 35 Clients, 17 Associates and 37 Independent Merchandisers.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2007</div>
	            <div className='ten columns copy'>
	            	The Company ends the year with 38 Clients, 18 Associates and 39 Independent Merchandisers.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2008</div>
	            <div className='ten columns copy'>
	            	Joining the Company, Rich Amorosa, Katie Day, and Marta Valdez. The Company ends the year with 43 Clients, 20 Associates and 40 Independent Merchandisers.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2009</div>
	            <div className='ten columns copy'>
	            	Thad Ryan and Dave Low join the Performance Group. The Company ends the year with 43 Clients, 20 Associates and 40 Independent Merchandisers.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2010</div>
	            <div className='ten columns copy'>
	            	Dave Anderson, Dawn Struer, and Deanna Church join the Performance Group in early 2011. The Company ends the year with 52 Clients, 22 Associates and 40 Independent Merchandisers.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2011</div>
	            <div className='ten columns copy'>
	            	Tony Metz retires as a partner of the company, but remains on as a consultant. Jerry Jenson joins the Performance Group as General Manager. The Company ends the year with 51 Clients, 22 Associates and 40 Independent Merchandisers.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2012</div>
	            <div className='ten columns copy'>
	            	Tracy Schmidt joins the Performance Group as Retail Sales Manager. Tami Barrera joins the Performance Group as a Customer Sales Manager. Bob Jones joins the Performance Group as Buisness Manager. The Performance Group moves to a new office, 6673 Owens Drive, Pleasanton, CA 94588.
	            </div>
	          </div>
	          
	          <div className='row'>
	            <div className='two columns'>2013</div>
	            <div className='ten columns copy'>
	            	The Performance Group welcomes Ken Moore as Senior Business Manager, Sara Lund as Adminstrative Assistant, Jeremiah Hilton and Charmaine Murphy as Customer Sales Managers.
	            </div>
	          </div>
	          
	        </div>
        </div>
        
				<h2 className='section-header'>Team</h2>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);
