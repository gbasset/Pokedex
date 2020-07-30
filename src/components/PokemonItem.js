import React from "react";

const PokemonItem = ({ pokemon }) => {
  const imgSrc = pokemon.isCatch
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
    : pokemon.img


  return (
    <li className="pokemon-item">
      <img
        alt={pokemon.name}
        src={imgSrc}
      />
      <p style={pokemon.isCatch ? { color: 'red', fontWeight: 'bold' } : { color: 'black' }}>  {pokemon.name}</p>

    </li>
  );
};

export default PokemonItem;
