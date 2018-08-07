import React, { Component } from 'react';
import Buzz from '../Audio/Wrong.mp3';
import './ErrorBlock.css';

class ErrorBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: false,
			buzz: new Audio(Buzz),
		};
	} 

	render() {
		return (
			<div 
				key={Math.random()} 
				className={(this.state.checked) ? "error-block marked" : "error-block"} 
				onClick={() => {
					if(!this.state.checked){
						this.state.buzz.play();
					}
					this.setState({checked: !this.state.checked})
					}
				}>
				X
			</div>
		)
	}
}

export default ErrorBlock;