import React, { Component } from 'react';
import './App.css';
import LengthInput from './LengthInput/LengthInput';
import Validation from './Validation/Validation'
import Char from './Char/Char';

class App extends Component {
  state = {
    input: '',
  }

  inputChangedHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  deleteCharHandler = (index) => {
    let inputText = this.state.input.split('');
    inputText.splice(index,1);
    inputText = inputText.join('');
    this.setState({
      input: inputText,
    })
  }

  render() {
    
    const charList = this.state.input.split('').map((char, i) => {
      return <Char key={i} text={char} clicked={() => this.deleteCharHandler(i)} />
    })

    return (
      <div>
        <LengthInput changed={this.inputChangedHandler} length={this.state.input.length} />
        <Validation length={this.state.input.length} />
        {charList}
      </div>
    )
  }
};

// Section 3:

// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';

// class App extends Component {
//   state = {
//     usernames: ["asarahali00","kevolution","kdt0116"],
//   };

//   usernameHandler = (event) => {
//     this.setState( {
//       usernames: [
//         event.target.value,
//         event.target.value,
//         event.target.value,
//       ]
//     })
//   }

//   render() {
//     return (
//     <div className="App">
//       <UserInput 
//         changed={this.usernameHandler}
//         ogName={this.state.usernames[0]}/>
//       <UserOutput username={this.state.usernames[0]}/>
//       <UserOutput username={this.state.usernames[1]}/>
//       <UserOutput username={this.state.usernames[2]}/>
//     </div>
//   );
//     }
// }

export default App;
