import React from "react";
import { connect } from 'react-redux'
import PokemonItem from "./PokemonItem";

const PokeList = ({ click, pokemons, pending }) => {

  return (
    <div className="list-container">
      <ul>
        {
          pokemons.map(pokemon => (
            <PokemonItem
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))
        }
      </ul>
    </div>
  );
};
// Map le state du reducer en props
const mapStateToProps = ({ click, pokemons, pending }) => {
  return {
    click,
    pokemons,
    pending
  }
}
export default connect(mapStateToProps)(PokeList);
