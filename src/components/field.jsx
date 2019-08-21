import React, { Component } from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import axios from "axios";
import AllPlayers from "../data/players.json";

class FootballField extends Component {
  //   state = {
  //     players: []
  //   };

  //   async componentDidMount() {
  //     const { data: players } = await axios.get("players.json");
  //     this.setState({ players });
  //   }
  eventLogger = (e: MouseEvent, data: Object) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
  };

  render() {
    return (
      <div className="field">
        <div className="field-A">
          <div class="field-A-center-circle" />
          {AllPlayers.map((players, index) => {
            return (
              <Draggable
                allowAnyClick="true"
                bounds="parent"
                //axis="x"
                handle=".field-A-player"
                defaultPosition={{ x: 25, y: 10 }}
                position={null}
                grid={[10, 10]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              >
                <div className="field-A-player" key={index}>
                  {/* <div>
                    <p>{players.name}</p>
                  </div> */}
                  <div className="field-A-player-number">
                    <p>{players.number}</p>
                  </div>
                </div>
              </Draggable>
            );
          })}
        </div>
        <div className="field-B">
          <div class="field-B-center-circle" />
          {AllPlayers.map((players, index) => {
            return (
              <Draggable
                allowAnyClick="true"
                bounds="parent"
                //axis="x"
                handle=".field-B-player"
                defaultPosition={{ x: 25, y: 10 }}
                position={null}
                grid={[10, 10]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}
              >
                <div className="field-B-player" key={index}>
                  {/* <div>
                    <p>{players.name}</p>
                  </div> */}
                  <div className="field-B-player-number">
                    <p>{players.number}</p>
                  </div>
                </div>
              </Draggable>
            );
          })}
        </div>
      </div>
    );
  }
}
export default FootballField;
