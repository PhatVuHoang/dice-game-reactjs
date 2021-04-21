const stateDefault = {
  taiXiu: true, // true là tài (từ 3 - 11 điểm), false là xỉu (12+ điểm)
  arrayDice: [
    { id: 1, image: "./img/1.png" },
    { id: 1, image: "./img/1.png" },
    { id: 1, image: "./img/1.png" },
  ],
  win: 0,
  totalRound: 0,
};

export const DiceGameReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "BET": {
      state.taiXiu = action.taiXiu;
      return { ...state };
    }
    case "PLAY_GAME": {
      // handling random
      let arrayDiceRandom = [];
      for (let i = 0; i < 3; i++) {
        let numberRandom = Math.floor(Math.random() * 6) + 1;
        //create dice from random number
        let diceRandom = {
          id: numberRandom,
          image: `./img/${numberRandom}.png`,
        };
        arrayDiceRandom.push(diceRandom);
      }
      state.arrayDice = arrayDiceRandom;
      state.totalRound += 1;
      let totalScore = arrayDiceRandom.reduce((total, dice, index) => {
        return (total += dice.id);
      }, 0);
      if(totalScore <= 11 && state.taiXiu===true || (totalScore > 11 && state.taiXiu === false)) {
        state.win += 1;
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
