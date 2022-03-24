import React from "react";
import Card from "../UI/Card";
import classes from "./AddPlayer.module.css";

const AddPlayer = (props) => {
  const addPlayerHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addPlayerHandler}>
        <label htmlFor="playername">Player name</label>
        <input type="text" id="playername" />
        <label id="age">Age</label>
        <input type="number" htmlFor="age" />
        <label htmlFor="position">Position</label>
        <input id="position" type="text" />
        <button type="submit">Add Player</button>
      </form>
    </Card>
  );
};

export default AddPlayer;
