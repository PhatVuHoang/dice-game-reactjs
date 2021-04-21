import { combineReducers } from "redux";
import { DiceGameReducer } from "./DiceReducer";

export const rootReducer = combineReducers({
    DiceGameReducer, // state dice
});
