import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import VendingMachine from './VendingMachine/VendingMachine';
import Soda from './Soda/Soda';
import Chips from './Chips/Chips';
import Candy from './Candy/Candy';

function App() {
  return (
      <div className="App">
        <nav className='App-nav'>
          <NavLink exact activeClassName='active-link' to='/'>
            Purchase
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/Soda'>
            Soda
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/Chips'>
            Chips
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/Candy'>
            Candy
          </NavLink>
        </nav>
        <div className="App-content">
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/Soda" component={Soda} />
          <Route exact path="/Chips" component={Chips} />
          <Route exact path="/Candy" component={Candy} />
        </Switch>
        </div>
      </div>
    );
}

export default App;
