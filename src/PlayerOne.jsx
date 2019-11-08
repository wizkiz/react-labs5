import React from "react";

export default class PlayerOne extends React.Component {
  render() {
    const style1 = {
      border: "1px solid",
			margin: "auto",
		};
		
		const buttonStyle = {
			width: "10%",
			height: "50px",
			marginLeft: "1%",
			marginBottom: "1%"
		}

		const style2 = {
			marginLeft: "1%"
		}
		
    const content = (
		<div style={style1} float="right">
      	  	<h1 style={style2}>Player One</h1>
      	  	<p style={style2}>Name: {this.props.name}</p>
      	  	<p style={style2}>Played times: {this.props.times}</p>
     		<button onClick={this.props.buttonHandler} type="button" style={buttonStyle} disabled={this.props.isPlaying} >
				{this.props.isPlaying ? "This player is playing now" : "Play"}
			</button>   
     	</div>
    );

    return content;
  }
}
