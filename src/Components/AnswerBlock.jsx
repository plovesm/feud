import React from 'react';
import './AnswerBlock.css';

function AnswerBlock(props) {

	return (
		<div className="answer-block">
			
			<div 
				className={(props.covered) ? "answer-covered": "answer-revealed"}
				onClick={() => props.onClick()}>
				{props.answer}&nbsp;:&nbsp;{props.survey}
			</div>
			<div 
				className={(!props.covered) ? "answer-covered": "answer-revealed"}
				onClick={() => props.onClick()}>
				{props.position}
			</div>
		</div>
	);
}

export default AnswerBlock;