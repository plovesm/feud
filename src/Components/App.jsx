import React, { Component } from 'react';
import GameBoard from './GameBoard';
import Questions from '../Model/questions.json';
import ThemeSong from '../Audio/Familyfeud-Theme.mp3';
import './App.css';



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

	startGame() {
		const theme = new Audio(ThemeSong);
		theme.play();

		this.refreshState({page: "game"})
	}

	renderPage() {
		if (this.state.page === "new") {
	      	return(
	      		/*<Button onClick={() => this.refreshState({page: "game"})}>
	      			New Game
	      		</Button>*/
	      		<div className="logoDiv" onClick={() => this.startGame()}>
	      			<span>Click to start a New Game</span>
	      		</div>
	      	)
	    } else {
	      	return(
		      	<GameBoard 
		      		questions ={this.state.questions} 
		      		refreshState={(update) => {this.refreshState(update);}}
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
