import React, { Component } from 'react';
import AnswerBlock from './AnswerBlock';
import Questions from '../Model/questions.json'
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		console.log(JSON.stringify(Questions));
		this.state = {
			questions: Questions
		};
	}
  	render() {
	    return (
	      <div className="App">
	      	
		        {this.state.questions.map(q => {
		        	return(
		        	<div className="answer-board">
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
			        							this.setState({});
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
		    
	      </div>
	    );
	}
}

export default App;
