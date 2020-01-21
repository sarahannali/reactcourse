import React, { Component } from 'react';
import classes from './ZodiacPage.module.css';

class ZodiacPage extends Component {
  render() {
    const facts = this.props.content.facts.map((el) => {
        return <p key={el}>{el}</p>
    })

    return (
        <div className={classes.ZodiacPage}>
            <div className={classes.sidebar}>
                <img src={this.props.content.imgsrc} alt="zodiac img" />
            </div>
            <div className={classes.content}>
                <h1>{this.props.content.sign}</h1>
                <h3>{this.props.content.dates}</h3>
                {facts}
                <span></span>
                <button className="ui button" onClick={this.props.history.goBack}>Go Back</button>
            </div>
        </div>
    );
  }
}

export default ZodiacPage;