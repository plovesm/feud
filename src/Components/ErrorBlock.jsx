import React, { Component } from 'react';
import Buzz from '../Audio/Wrong.mp3';
import './ErrorBlock.css';

class ErrorBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: false,
		};
	} 

	render() {
		return (
			<div 
				key={Math.random()} 
				className={(this.state.checked) ? "error-block marked" : "error-block"} 
				onClick={() => {
					if(!this.state.checked){
						const buzz = new Audio(Buzz);
						buzz.play();
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