import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import PokeGame from '../PokeGame/PokeGame';

class Pokedex extends Component {

  shuffPoke(Pokemon) {
    var m = (Pokemon.length - 1), copyM, i;

    i = Math.floor(Math.random() * m--)
    
    copyM = Pokemon[m];
    Pokemon[m] = Pokemon[i];
    Pokemon[i] = copyM;

    return Pokemon
  }

  render() {

  let Pokemon = [
      { id: 4, name: 'Charmander', type: 'Fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'Water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'Bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'Flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'Electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'Normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'Poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'Normal', base_experience: 65 }
  ]

  this.shuffPoke(Pokemon);

  let h1 = 0;
  let h2 = 0;

  for (let i = 0; i < Pokemon.length; i++){
    if (i < Pokemon.length/2) {
      h1 += Pokemon[i].base_experience;
    }
    else {
      h2 += Pokemon[i].base_experience;
    }
  }

    return (
      <div>
        <PokeGame handNum={1} hand={h1} other={h2}/>
        {Pokemon.map((el, i) => {
          const pokecardElement = <Pokecard
          key={el.id}
          id={el.id}
          name={el.name}
          type={el.type}
          base_experience={el.base_experience} /> 

          if (i < Pokemon.length/2) {
            return <span>{pokecardElement}</span>
          }

          else if (i === Pokemon.length/2) {
            return <span><PokeGame handNum={2} hand={h2} other={h1}/>{pokecardElement}</span>
          }

          else {
            return <span>{pokecardElement}</span>
          }
          })}
      </div>
    );
  }
}

export default Pokedex;