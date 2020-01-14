import React from 'react';
import './App.css';
// import Machine from './Machine/Machine'
// import { Choice, Remove } from './FruitExercise/Helpers';
// import Fruits from './FruitExercise/Foods';
import StateClicker from './StateClicker/StateClicker';

function App() {
  // const givenFruit = Choice(Fruits)

  return (
    <div>
      <StateClicker />
    </div>
    // FOR FRUIT EXERCISE:
    // <div>
    //   <p>Hello, I'd like one {givenFruit} please!</p>
    //   <p>Here you go: {givenFruit}</p>
    //   <p>Delicious! May I have another?</p>
    //   <p>I'm sorry, we're all out. We have {Remove(Fruits, givenFruit)} left.</p>
    // </div>

    // FOR SLOT MACHINE EXERCISE:
    // <div className="App">
    //   <h1>Slot Machine!!!</h1>
    //   <Machine
    //     s1="x"
    //     s2="y"
    //     s3="z" />
    //   <Machine
    //     s1="y"
    //     s2="y"
    //     s3="y" />
    //   <Machine
    //     s1="x"
    //     s2="y"
    //     s3="x" />
    // </div>
  );
}

export default App;
