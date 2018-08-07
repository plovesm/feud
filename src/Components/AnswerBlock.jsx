import React, { Component } from 'react';
import Clang from '../Audio/Right_clang.mp3';
import './AnswerBlock.css';

class AnswerBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			covered: true,
			answer: props.answer,
			survey: props.survey,
			position: props.position,
		}
	}

	renderContent() {
		console.log(this.state.covered);
		return (
			(this.state.covered) ? this.state.position : this.state.answer + " : " + this.state.survey
		)
	}

	render () {
		return (
			<div 
				className="answer-block"
				onClick={() => {
						if(this.state.covered) {
							const clang = new Audio(Clang);
							clang.play();
						}
						this.setState({covered: !this.state.covered})
					}
				}
			>
				<div className={(this.state.covered) ? "answer-covered": "answer-revealed"}>
					{this.renderContent()}
				</div>
				
			</div>
		);
	}
}

export default AnswerBlock;