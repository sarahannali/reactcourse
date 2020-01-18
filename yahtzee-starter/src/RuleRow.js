import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const currClass = this.props.score === undefined
      ? "RuleRow RuleRow-active"
      : "RuleRow RuleRow-disabled"
    return (
      <tr className={currClass} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score === undefined
          ? this.props.desc
          : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;