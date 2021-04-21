import React, { Component } from "react";
import Detail from "./Detail";
import Dice from "./Dice";
import "./Dicegame.css";
import { connect } from "react-redux";
class Dicegame extends Component {
  render() {
    return (
      <div
        className="game"
        style={{ backgroundImage: "url('./img/bgGame.png')" }}
      >
        <div className="title-game text-center mt-5 display-4">Dice Game</div>
        <div className="row text-center mt-5">
          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.bet(true);
              }}
            >
              Tai
            </button>
          </div>
          <div className="col-2">
            <Dice />
          </div>
          <div className="col-5">
            <button
              className="btnGame"
              onClick={() => {
                this.props.bet(false);
              }}
            >
              Xiu
            </button>
          </div>
        </div>
        <div className="detail text-center">
          <Detail />
          <button
            className="btn btn-success p-3 mt-5"
            onClick={() => {
              this.props.playGame();
            }}
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    bet: (taiXiu) => {
      let action = {
        type: "BET",
        taiXiu,
      };
      dispatch(action);
    },
    playGame: () => {
      let action = {
        type: "PLAY_GAME"
      }
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(Dicegame);
