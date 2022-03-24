import React from 'react'

const AddPlayer = (props) => {

    const addPlayerHandler = (event) => {
        event.preventDefault();


    }
    return (
      <Card>
      <form onSubmit={addPlayerHandler}>
          <label htmlFor='playername'>Player name</label>
          <input type='text' id='playername' />
          <label id='age'>Age</label>
          <input type='number' htmlFor='age'/>
          <label htmlFor='position'>Position</label>
          <input id='position' type='text' />
          <button type='submit'>Add Player</button>
            </form>
            </Card>
  )
}

export default AddPlayer