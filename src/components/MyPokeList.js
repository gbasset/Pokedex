import React, { useEffect, useState } from 'react'
import PokeItem from './PokeItem';

export default function MyPokeList({ pokemons }) {
    console.log("pokemons", pokemons);
    const myPokemons = pokemons.filter(x => x.isCatch)
    const urls = []
    if (myPokemons) {
        for (let i = 1; i <= myPokemons.length; i++) {
            urls.push(`https://pokeapi.co/api/v2/pokemon/${myPokemons[i - 1].name}`)
        }
    }
    const requests = urls.map(url => fetch(url))
    const [myPokListToMap, setMyPokListToMap] = useState([])
    const fetchAllPokData = () => {
        Promise.all(requests)
            // on attend les reponses et on les transformes en JSON
            .then(responses => Promise.all(responses.map(res => res.json())))
            .then(responses => setMyPokListToMap(responses))
    }
    useEffect(() => {
        if (myPokemons.length > 0) {
            fetchAllPokData()
        }
    }, [pokemons])

    return (
        <div >
            <h1>My Pokemons</h1>
            <h2> {pokemons.filter(pokemon => pokemon.isCatch).length} / {pokemons.length}</h2>
            <div className="containerPokeList">
                {myPokListToMap.map(pokemon =>
                    < PokeItem key={pokemon.id} pokemon={pokemon} />
                )}
            </div >
        </div>
    )
}
