export const player1Name = (data) => dispatch => {
  console.log(data);
  dispatch({
    type: 'NAME1',
    payload: data
  })
}

export const player2Name = (data) => dispatch => {
  dispatch({
    type: 'NAME2',
    payload: data
  })
}
