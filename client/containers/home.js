import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeatherData } from '../actions/index.js';


class Home extends Component {

	componentDidMount() {
	  window.scrollTo(0,0);
	}

 	// Render
	render() {
		return (
			<div className='home'>
				
				<div className='drop-shadow'>
				</div>
				
				<div className='banner'>
				</div>
				
				<div className='container section-spacer'>
					<div className='row'>
						<h3 className='section-header'>Why We Started</h3>
					</div>
					<div className='row copy why-copy'>
						The evolution of the traditional food broker has led to the formation of large Regional and National organizations. Regardless of size, these companies were all faced with the same problems:
					</div>
					<div className='row why-gallery'>
						<div className='one-third column'>
							<img src='../assets/imgs/store.svg' className='home-svg' />
							<div className='copy center'>Basic shift from eating away from home</div>
						</div>
						<div className='one-third column'>
							<img src='../assets/imgs/cart-12.svg' className='home-svg' />
							<div className='copy center'>Value shopping has led to alternative classes of trade</div>
						</div>
						<div className='one-third column'>
							<img src='../assets/imgs/coin-6.svg' className='home-svg' />
							<div className='copy center'>The move from relationship "selling" to "transactions"</div>
						</div>
					</div>
					<div className='row why-gallery'>
						<div className='one-third column'>
							<img src='../assets/imgs/graph-5.svg' className='home-svg' />
							<div className='copy center'>Poor succession planning</div>
						</div>
						<div className='one-third column'>
							<img src='../assets/imgs/diagram-1.svg' className='home-svg' />
							<div className='copy center'>Retailer centralization</div>
						</div>
						<div className='one-third column'>
							<img src='../assets/imgs/box-1.svg' className='home-svg' />
							<div className='copy center'>Manufacturer consolidations</div>
						</div>
					</div>
					<div className='row why-gallery'>
						<div className='one-third column'>
							<img src='../assets/imgs/justice-scale.svg' className='home-svg' />
							<div className='copy center'>Difficulty in balancing the requirements of both the manufacturer and the retailer</div>
						</div>
						<div className='one-third column'>
							<img src='../assets/imgs/notes-2.svg' className='home-svg' />
							<div className='copy center'>High cost of operation</div>
						</div>
						<div className='one-third column'>
							<img src='../assets/imgs/graph-4.svg' className='home-svg' />
							<div className='copy center'>Decline in brokerage rates</div>
						</div>
					</div>
				</div>
				
				<div className='key-dynamics'>
					<div className='container section-spacer'>
						<div className='row'>
							<h3 className='section-header'>Key Dynamics</h3>
						</div>
						<div className='row copy'>
							It became clear that a new sales model must appear, which has to do a better job of balancing	efficiency and effectiveness. These new companies will be teamed for specific results. Process	will be the language. Resources will be shared through computing power and telecommunication. The new organizations will be based on smart people, with a combination of character and competency. With these things in mind, the Performance Group partners elected to take a new path, where the services we offer will be based on value, not size. This new model maintains at all time our commitment to our manufacturers.They in turn must understand some of the key dynamics shaping the industry:
						</div>
						<div className='row dynamic-bullets copy'>
							• Shelf management is turning into shelf marketing.<br />
							• Retail coverage is changing from regular store calls to execution on demand.<br />
							• Technology and shared information will be used to deploy resources where and when needed.<br />
							• The sales service organization ( formerly called the broker) must be in a position to illustrate not only the cost for specific services, but also the value of the services.
						</div>
					</div>
				</div>
				
				<div className='lets-talk'>
					<div className='container'>
						<div className='row'>
							<div className='eight columns'>
								<div className='row'>
									<h3>Lets Talk</h3>
								</div>
								
								<div className='row copy'>
									We feel the Performance Group has addressed many of the keys areas that have adversely effected the traditional food broker. Please keep us in mind when you're looking at alternatives to your current representation.
								</div>
								
							</div>
							
							<div className='four columns'>
								<button className='contact-button'>Contact</button>
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
