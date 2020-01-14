import React, { Component } from 'react';
import classes from './Pokecard.module.css';

class Pokecard extends Component {
    render() {

        function imgSrc(id) {
            const strID = id.toString()
            const urlID = "0".repeat(3 - strID.length) + strID
            return "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + urlID + ".png";
        }

        return (
            <div className={classes.Pokecard}>
                <img src={imgSrc(this.props.id)} alt="Pokemon"></img>
                <div className={classes.info}>
                    <h3>{this.props.name}</h3>
                    <p>Type: {this.props.type}</p>
                    <p>Exp: {this.props.base_experience}</p>
                </div>
            </div>
        );
    }
}

export default Pokecard;