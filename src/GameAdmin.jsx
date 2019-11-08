import React from "react";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";

export default class GameAdmin extends React.Component {

  render() {
		const style1 = {
			marginLeft: "1%",
			width: "10%",
			marginBottom: "1%"
		}

    const content = (
      <div>
        <PlayerOne/>
		<br />
        <PlayerTwo/>
        <br/>
        <label>
          Set P1 name
          <input style={style1}/>
        </label>
		<br />
        <label>
          Set P2 name
          <input style={style1}/>
        </label>
      </div>
    );

    return content;
  }
}
