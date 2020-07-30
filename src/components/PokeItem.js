import React from 'react'
import './PokeItem.css'
export default function PokeItem({ pokemon }) {
    return (
        <div className="itemPokeContainer" >
            <div className="imagesPokemon">
                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                <img src={pokemon.sprites.front_female === null ? pokemon.sprites.back_shiny : pokemon.sprites.front_female} alt={pokemon.name} />
            </div>
            <h3 className="namePokemon">{pokemon.name}</h3>
            <h4>Xp : {pokemon.base_experience}</h4>
            <div>
                <h3>Types:</h3>
                {pokemon.types.map((type, id) =>
                    <div key={id}>
                        <h3>{type.type.name}</h3>
                    </div>)}
            </div>

        </div>
    )
}
