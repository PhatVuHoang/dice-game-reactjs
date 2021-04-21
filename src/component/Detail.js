import React, { Component } from "react";
import {connect} from 'react-redux';

class Detail extends Component {


  render() {
    return (
      <div>
        <div className="display-4">
          SELECT: <span className="text-danger">{this.props.taiXiu ? 'TAI' : 'XIU'}</span>
        </div>
        <div className="display-4">
          {/* WIN: <span className="text-warning">5</span> */}
          WIN: <span className="text-warning">{this.props.win}</span>
        </div>
        <div className="display-4">
          TOTAL ROUND: <span className="text-success">{this.props.totalRound}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taiXiu: state.DiceGameReducer.taiXiu,
    win: state.DiceGameReducer.win,
    totalRound: state.DiceGameReducer.totalRound
  }
}

export default connect(mapStateToProps)(Detail)