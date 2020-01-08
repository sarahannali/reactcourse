import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: ["asarahali00","kevolution","kdt0116"],
  };

  usernameHandler = (event) => {
    this.setState( {
      usernames: [
        event.target.value,
        event.target.value,
        event.target.value,
      ]
    })
  }

  render() {
    return (
    <div className="App">
      <UserInput 
        changed={this.usernameHandler}
        ogName={this.state.usernames[0]}/>
      <UserOutput username={this.state.usernames[0]}/>
      <UserOutput username={this.state.usernames[1]}/>
      <UserOutput username={this.state.usernames[2]}/>
    </div>
  );
    }
}

export default App;
