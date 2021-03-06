import React, { Fragment } from 'react';
import AnswerBlock from './AnswerBlock';
import ErrorBlock from './ErrorBlock';
import NewGameImg from '../Assets/newgame.png';
import './GameBoard.css';

function GameBoard(props) {
	
	return (
		<Fragment>
			<img src={NewGameImg} alt="New Game" title="New Game" className="actionIcon" onClick={() => props.newGame()} />
				
			{props.questions.map(q => {
		        return(
		        	<div className="gameboard" key={q.question}>
		        		<div key={Math.random()}>
			        		<h1>{q.question}</h1>
			        	
			        		{q.answers.map(a => {
		        				return (
			        				<AnswerBlock 
			        					position={a.position}
			        					key={a.survey + a.answer} 
			        					survey={a.survey} 
		        						answer={a.answer}
		        						covered={true}
		        						refresh={(r) => {props.refreshState(r)}}
		        						
		        						/>
		        				);
		        			})}
		        		</div>
		        		<ErrorBlock refresh={(r) => {props.refreshState(r)}} />
		        		<ErrorBlock refresh={(r) => {props.refreshState(r)}} />
		        		<ErrorBlock refresh={(r) => {props.refreshState(r)}} />
		        	</div>
		       	);
		    })}

		</Fragment>
	)

}

export default GameBoard;