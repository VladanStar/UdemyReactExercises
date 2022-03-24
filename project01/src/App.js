import React, { useState} from 'react';
import AddPlayer from './components/Players/AddPlayer';
import PlayersList from './components/Players/PlayersList';


function App() {
  const [playersList, setPlayersList] = useState([]);

  const addPlayerHandler = (pName, pAge, pPosition) => {
    setPlayersList((prevPlayerList) => {
      return [...prevPlayerList, { name: pName, age: pAge, position: pPosition, id: Math.random().toString()
} ]
    })
    
  }
  return (
    <div>
      <AddPlayer onAddPlayer={addPlayerHandler}/>
      <PlayersList players={playersList} />

    </div>
  );
}

export default App;
