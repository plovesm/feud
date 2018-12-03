import React, { Fragment } from 'react';
import AnswerBlock from './AnswerBlock';
import NewGameImg from '../Assets/newgame.png';


function AnswerSheet(props) {
	
	return (
		<Fragment>
			<img src={NewGameImg} alt="New Game" title="New Game" className="actionIcon" onClick={() => props.newGame()} />
				
			{props.questions.map(q => {
		        return(
		        	<div className="gameboard answerSheet" key={q.question}>
		        		<div key={Math.random()}>
			        		<h1>{q.question}</h1>
			        	
			        		{q.answers.map(a => {
		        				return (
			        				<AnswerBlock 
			        					position={a.position}
			        					key={a.survey + a.answer} 
			        					survey={a.survey} 
		        						answer={a.answer}
		        						covered={false}
		        						refresh={(r) => {props.refreshState(r)}}
		        						
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

export default AnswerSheet;