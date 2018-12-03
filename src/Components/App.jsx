import React, { Component, Fragment } from 'react';
import GameBoard from './GameBoard';
import AnswerSheet from './AnswerSheet';
import Questions from '../Model/questions.json';
import ThemeSong from '../Audio/Familyfeud-Theme.mp3';
import PlayIcon from '../Assets/playIcon.png';
import './App.css';

const theme = new Audio(ThemeSong);
	

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: "new",
			questions: Questions
		};
		
	}

	refreshState(update){ 
		let objUpdate = (update) ? update: {};
		this.setState(objUpdate);
	}

	startTheme(){
		theme.play();
	}

	stopTheme(){
		//Stop the theme
		theme.pause();
		theme.currentTime = 0;
	}

	newGame(){
		this.refreshState({page: "new"});
	}

	startGame() {
		this.stopTheme();

		//Update the state machine and move to the next page
		this.refreshState({page: "game"})
	}

	answerSheet() {
		this.stopTheme();

		//Update the state machine and move to the next page
		this.refreshState({page: "answer"})
	}

	renderPage() {
		if (this.state.page === "new") {
	      	return(
	      		<Fragment>
		      		<img src={PlayIcon} className="actionIcon" alt="Play Theme" title="Play Theme" onClick={() => this.startTheme()} />
		      		<div className="logoDiv" onClick={() => this.startGame()}>
		      			<span>Click to Start a New Game</span>
		      		</div>
		      		<div className="actionIcon" onClick={() => this.answerSheet()}>|</div>
		      	</Fragment>
	      	)
	    } else if (this.state.page === "answer") {
	    	return(
	      		<Fragment>
		      		<AnswerSheet
			      		questions ={this.state.questions} 
			      		refreshState={(update) => {this.refreshState(update);}}
			      		newGame={() => {this.newGame();}}
			      	/>
		      	</Fragment>
	      	)

	    } else {
	      	return(
		      	<GameBoard 
		      		questions ={this.state.questions} 
		      		refreshState={(update) => {this.refreshState(update);}}
		      		newGame={() => {this.newGame();}}
		      	/>
		    )
		}

	}

  	render() {
	    return (
	      <div className="App">
	      	{this.renderPage()}
	      </div>
	    );
	}
}

export default App;
