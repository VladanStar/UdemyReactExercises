import React from 'react';
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";


const Header = props => {
  return (
      <React.Fragment>
          <header className={classes.header}>
              <h1>React Meals</h1>
              <button>Cart</button>
          </header>
          <div className={classes['main-image']}>
              <img src={mealsImage} alt='A table full delicious food'/>
          </div>
          
   </React.Fragment>
  )
}


export default Header