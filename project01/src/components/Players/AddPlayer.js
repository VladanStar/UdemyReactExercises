import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddPlayer.module.css";
import ErrorModal from "../UI/ErrorModal";
const AddPlayer = (props) => {
  const [enteredPlayerAge, setEnteredPlayerAge] = useState("");
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
    const [enteredPlayerPosition, setEnteredPlayerPosition] = useState("");
    const [error, setError] = useState()

  const addPlayerHandler = (event) => {
    event.preventDefault();

    if (
      enteredPlayerName.trim().length === 0 ||
      enteredPlayerAge.trim().length === 0 ||
      enteredPlayerPosition.trim().length === 0
    ) {
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
        });
      return;
    }
      if (+enteredPlayerAge < 1) {
          setError({
              title: 'Invalid age',
              message: 'Please enter a valid age (> 0).',
          });
      return;
    }
    props.onAddPlayer(
      enteredPlayerName,
      enteredPlayerAge,
      enteredPlayerPosition
    );
    setEnteredPlayerAge("");
    setEnteredPlayerName("");
    setEnteredPlayerPosition("");
  };

  const playerNameChangeHandler = (event) => {
    setEnteredPlayerName(event.target.value);
  };
  const playerAgeChangeHandler = (event) => {
    setEnteredPlayerAge(event.target.value);
  };
  const playerPositionChangeHandler = (event) => {
    setEnteredPlayerPosition(event.target.value);
    };
    const errorHandler = () => {
        setError(null);
    };

  return (
    <>
          {error && (
              <ErrorModal
                  title={error.title}
                  message={error.message}
                  onConfirm={errorHandler}
              />
          )}
      <Card cssClass={classes.input}>
        <form onSubmit={addPlayerHandler}>
          <label htmlFor="playername">Player name</label>
          <input
            type="text"
            id="playername"
            value={enteredPlayerName}
            onChange={playerNameChangeHandler}
          />
          <label id="age">Age</label>
          <input
            type="number"
            htmlFor="age"
            value={enteredPlayerAge}
            onChange={playerAgeChangeHandler}
          />
          <label htmlFor="position">Position</label>
          <input
            id="position"
            type="text"
            value={enteredPlayerPosition}
            onChange={playerPositionChangeHandler}
          />
          <Button type="submit">Add Player</Button>
        </form>
      </Card>
    </>
  );
};

export default AddPlayer;
