import React from 'react';
import Card from '../UI/Card';
import classes from "./PlayersList.module.css"

const PlayersList = (props) => {
    return (
      <Card cssClass ={classes.players}>
      <ul>
          {props.players.map((player) => (
              <li key={player.id}>
                  {player.name}({player.age} years old)({player.position} position player)</li>
         ))}
            </ul>
            </Card>
  )
}

export default PlayersList