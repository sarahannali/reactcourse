import React, { Component } from 'react';
import classes from './Insult.module.css';

class Insult extends Component {
    constructor(props){
        super(props);
        this.handleClickUp = this.handleClickUp.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
    }

    handleClickUp(){
        this.props.clickHandler(this.props.idx, "up")
    }

    handleClickDown(){
        this.props.clickHandler(this.props.idx, "down")
    }

    getColor(score){
        const borderColors = ["#f44336", "#ff9800", "#ffc107", "#ffeb3b", "#cddc39", "#8bc34a", "#4caf50"];
        if (score === -10){
            return borderColors[0]
        }
        else if (-9 <= score && score <= -6){
            return borderColors[1]
        }
        else if (-5 <= score && score <= -1){
            return borderColors[2]
        }
        else if (0 <= score && score <= 3){
            return borderColors[3]
        }
        else if (4 <= score && score <= 6){
            return borderColors[4]
        }
        else if (7 <= score && score <= 9){
            return borderColors[5]
        }
        else if (score === 10){
            return borderColors[6]
        }
    }

    render() {
        return (
            <div className={classes.Insult}>
                <button onClick={this.handleClickUp}><i className="fas fa-arrow-up"></i></button>
                <div className={classes.score} style={{border: "2px solid " + this.getColor(this.props.score)}}>
                    {this.props.score}
                </div>
                <button onClick={this.handleClickDown}><i className="fas fa-arrow-down"></i></button>
                <div className={classes.quote}>
                    {this.props.quote} <span className={classes.source}>{this.props.source}</span>
                </div>
            </div>
        );
    }
}

export default Insult;