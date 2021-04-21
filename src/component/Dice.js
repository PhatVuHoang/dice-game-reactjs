import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dice extends Component {

    renderDice = () => {
        //get props from reducer
        return this.props.arrayDice.map((dice,index) => {
            return <img key={index} className="mr-2" style={{width:50,height:50}} src={dice.image} alt={dice.image} />
        })
    }

    render() {
        return (
            <div>
                {this.renderDice()}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        arrayDice: state.DiceGameReducer.arrayDice
    }
}

export default connect(mapStateToProps)(Dice)