import React, { Component } from 'react';
import classes from './CardGenerator.module.css';
import axios from 'axios';
import Card from './Card/Card'

class CardGenerator extends Component {
    constructor(props){
        super(props);
        this.state = {
            remaining: "",
            deckID: "",
            imgs: []
        };
        this.getCard = this.getCard.bind(this);
    }
    componentDidMount(){
        axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res => {
            this.setState({
                deckID: res.data.deck_id
            })
        });
    }

    getCard(){
        axios.get("https://deckofcardsapi.com/api/deck/" + this.state.deckID + "/draw/?count=1").then(res => {
            let imgsCopy = this.state.imgs;
            imgsCopy.push(res.data.cards[0].image)
            this.setState({
                remaining: res.data.remaining,
                imgs: imgsCopy
            })
        });
    }
    
    render() {
        let cards = this.state.imgs.map((e) => {
            return <Card
                img={e}
                key={e} />
        })

        console.log(this.state.remaining)
        
        return (
        <div className={classes.CardGenerator}>  
            <h1>Card Dealer</h1>
            {cards}
            {this.state.remaining !== 0
                ? <button onClick={this.getCard}>Click for Card</button>
                : alert("No cards left in deck!")}
        </div>
        );
    }
}

export default CardGenerator;