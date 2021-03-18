import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { player1Name, player2Name } from '../actions'

const FirstPage = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const dispatch = useDispatch();

  let onSubmit = e => {
    e.preventDefault();
    const dispatch = useDispatch();

    { (name1) => dispatch(player1Name(name1)) }

  }


  return (
    <div>
      <form >
        <input
          value={name1}
          onChange={e => setName1(e.target.value)}
          placeholder="Player1 Name"
          type="text"
          name="name1"
          required
        />
        <input
          value={name2}
          onChange={e => setName2(e.target.value)}
          placeholder="Player2 Name"
          type="text"
          name="name2"
          required
        />

        <button type="submit" onClick={(name1, name2) => { dispatch(player1Name(name1)); dispatch(player2Name(name2)); }}>
          Submit
      </button>

      </form>
    </div>
  )
}

export default FirstPage
