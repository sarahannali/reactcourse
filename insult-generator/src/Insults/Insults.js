import React, { Component } from 'react';
import classes from './Insults.module.css';
import insultsFile from '../assets/insult-scraper.json';
import Insult from './Insult/Insult';
import SideBar from './SideBar/SideBar'

class Insults extends Component {
    constructor(props){
        super(props);
        this.state={
            insults: JSON.parse(window.localStorage.getItem("insults")) || "[]",
            scores: JSON.parse(window.localStorage.getItem("scores")) || "[]",
            loaded: false
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.newInsults = this.newInsults.bind(this);
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({loaded: true})
        },1000);

        if(this.state.insults.length === 2){
            this.newInsults()
        }
    }

    clickHandler(i, chg){
        let newScores = [...this.state.scores]
        if (chg === "up" && newScores[i] !== 10){
            newScores[i] = newScores[i] + 1
        };
        if (chg === "down" && newScores[i] !== -10){
            newScores[i] = newScores[i] - 1
        };
        this.setState({scores: newScores});
    }

    newInsults(){
        let allInsults = []
        let allScores = []
        while (allInsults.length < 10){
            let randEntry = Math.floor(Math.random() * 87)
            let insult = insultsFile[randEntry]
            if (!allInsults.includes(insult)){
                allInsults.push(insult)
                allScores.push(0)
            }
        }
        this.setState({insults: allInsults, scores: allScores})
        window.localStorage.setItem(
            "insults",
            JSON.stringify(allInsults)
        )
    }

    render() {
        window.localStorage.setItem(
            "scores",
            JSON.stringify(this.state.scores)
        )

        if (this.state.loaded === false){
            return (
                <div className={classes.spinner}>
                    <i className="fas fa-7x fa-circle-notch fa-spin"></i>
                    <h1>Loading...</h1>
                </div>
            )
        }

        let insults = null;

        if(this.state.loaded === true){
            insults = this.state.insults.map((item, i) => (
                <Insult
                   key={item[0]}
                   quote={item[0]}
                   source={item[1]}
                   score={this.state.scores[i]}
                   idx={i}
                   clickHandler={this.clickHandler} />
            ))
            insults.sort(function(a, b){
                return b.props.score - a.props.score
            })
        }

        return (
            <div className={classes.Layout}>
                <SideBar onClick={this.newInsults}/>
                <div className={classes.Insults}>
                    {insults}
                </div>
            </div>
        );
    }
}

export default Insults;