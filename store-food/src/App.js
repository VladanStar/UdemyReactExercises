
import React from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
