import boardReducer from './board'
import playersReducer from './players'
import playersHistoryReducer from './playersHistory'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  board: boardReducer,
  players: playersReducer,
  playersHistory: playersHistoryReducer
});

export default allReducers;