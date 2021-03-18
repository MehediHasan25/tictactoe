const _INIT_ACTION_TYPE = "@@redux/INIT";

let playersState = {
  player1: { name: '', ticSelect: "X", points: 0 },
  player2: { name: '', ticSelect: "O", points: 0 }
}

const playersReducer = (state = playersState, action) => {

  switch (action.type) {
    case 'NAME1':
      return {
        ...state,
        player1: { ...state, name: action.payload }
      }

    case 'NAME2':
      return {
        ...state,
        player2: { ...state, name: action.payload }
      }

    default:
      return state;
  }
}

export default playersReducer;