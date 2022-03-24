import React, { useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddPlayer.module.css";

const AddPlayer = (props) => {
    const [enteredPlayerAge, setEnteredPlayerAge] = useState('')
    const [enteredPlayerName, setEnteredPlayerName] = useState('');
    const [enteredPlayerPosition, setEnteredPlayerPosition] = useState('')

  const addPlayerHandler = (event) => {
      event.preventDefault();
      console.log(enteredPlayerName)
      console.log(enteredPlayerAge)
      console.log(enteredPlayerPosition);
      setEnteredPlayerAge('')
      setEnteredPlayerName('');
      setEnteredPlayerPosition('');   
    };
    
    const playerNameChangeHandler = (event) => {
        setEnteredPlayerName(event.target.value);
    }
    const playerAgeChangeHandler = (event) => {
        setEnteredPlayerAge(event.target.value);
    }
    const playerPositionChangeHandler = (event) => {
        setEnteredPlayerPosition(event.target.value);
    }
  return (
    <Card cssClass={classes.input}>
      <form onSubmit={addPlayerHandler}>
        <label htmlFor="playername">Player name</label>
        <input type="text" id="playername" value={enteredPlayerName} onChange={playerNameChangeHandler} />
        <label id="age">Age</label>
              <input type="number" htmlFor="age" value={enteredPlayerAge} onChange={playerAgeChangeHandler}/>
        <label htmlFor="position">Position</label>
              <input id="position" type="text" value={enteredPlayerPosition} onChange={playerPositionChangeHandler} />
        <Button type="submit">Add Player</Button>
      </form>
    </Card>
  );
};

export default AddPlayer;
