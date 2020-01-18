import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.handleClick(this.props.idx);
  }

  render() {
    function dieImg(num) {
      const numDic = {
          1: "one",
          2: "two",
          3: "three",
          4: "four",
          5: "five",
          6: "six"
      }
      return "fas fa-dice-" + numDic[num]
  }

  let classes = 'Die' + ' ' + dieImg(this.props.val)
  
  if (this.props.locked){
    classes += ' Die-locked'
  }
  else if (this.props.rolling){
    classes += ' Die-rolling'
  }

  console.log(this.props.rolling)

    return (
      <i 
        className={classes}
        onClick={this.handleClick}></i>
    );
  }
}

export default Die;
