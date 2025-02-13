import React from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";

export default class GameAdmin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  playerOneName: null,
		  playerTwoName: null,
		  playerOneIsPlaying: true,
		  playerTwoIsPlaying: false,
		  playerOneTimes: 1,
		  playerTwoTimes: 0
		};
	  }

	handlerPlayerOneName = event => {
		this.setState({
		  playerOneName: event.target.value
		});
	  };
	
	  handlerPlayerTwoName = event => {
		this.setState({
		  playerTwoName: event.target.value
		});
	};

	//I assume that once given player started playing, we already count it as times player
	//and we don't have to wait until he finishes his session
	handlerPlayerOneButton = () => {
		this.setState(prevState => ({
			playerOneIsPlaying: !prevState.playerOneIsPlaying,
			playerTwoIsPlaying: !!prevState.playerOneIsPlaying,
			playerOneTimes: prevState.playerOneTimes + 1
		}));
	};
	
	handlerPlyerTwoButton = () => {
		this.setState(prevState => ({
			playerTwoIsPlaying: !prevState.playerTwoIsPlaying,
			playerOneIsPlaying: !!prevState.playerTwoIsPlaying,
			playerTwoTimes: prevState.playerTwoTimes + 1
		}));
	};
	

  	render() {
		const style1 = {
			marginLeft: "1%",
			width: "10%",
			marginBottom: "1%"
		}

   		const content = (
     	 <div>
     	 	<PlayerOne
				name={this.state.playerOneName}
				buttonHandler={this.handlerPlayerOneButton}
				isPlaying={this.state.playerOneIsPlaying}
				times={this.state.playerOneTimes.toString()}
			/>
			<br />
       		<PlayerTwo
				name={this.state.playerTwoName}
				buttonHandler={this.handlerPlyerTwoButton}
				isPlaying={this.state.playerTwoIsPlaying}
				times={this.state.playerTwoTimes.toString()}
			/>
     	 	<br/>
       	 	<label>
       	   		Set P1 name
				<input onChange={this.handlerPlayerOneName} style={style1}/>
       	 	</label>	
			<br />
       		<label>
       	   		Set P2 name
				<input onChange={this.handlerPlayerTwoName} style={style1}/>
       	 	</label>
     	 </div>
	 	);

    return content;
  }
}
