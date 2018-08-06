import React, { Fragment } from 'react';
import AnswerBlock from './AnswerBlock';
import Clang from '../Audio/Right_clang.mp3';

function GameBoard(props) {
	const clang = new Audio(Clang);

	return (
		<Fragment>
			{props.questions.map(q => {
		        return(
		        	<div className="answer-board" key={q.question}>
		        		<div key={Math.random()}>
			        		<h1>{q.question}</h1>
			        	
			        		{q.answers.map(a => {
		        				return (
			        				<AnswerBlock 
			        					position={a.position}
			        					key={a.survey + a.answer} 
			        					survey={a.survey} 
		        						answer={a.answer}
		        						covered={a.answercovered}
		        						onClick={() => {
			        							a.answercovered = !a.answercovered;
			        							
			        							//Play the clang sound if uncovering
			        							if(a.answercovered === false){
			        								clang.play();
			        							}

												props.refreshState({});
			        							return;
			        						} 
			        					}
		        						/>
		        				);
		        			})}
		        		</div>
		        	</div>
		       	);
		    })}

		</Fragment>
	)

}

export default GameBoard;