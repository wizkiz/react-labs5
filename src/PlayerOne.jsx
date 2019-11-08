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
    	    <h1 style={style2}>Player Two</h1>
        	<p style={style2}>Name: P1 Name</p>
        	<p style={style2}>Played times: 3</p>
        	<button type="button" style={buttonStyle}>
				Play
			</button>     
      </div>
    );

    return content;
  }
}
