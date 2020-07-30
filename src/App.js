import React, { useEffect, useState } from "react";
import "./styles.css";
import { connect } from 'react-redux'
import { CLICK, showPokemonAction, catchPokemonAction } from './store/action'
import fetchPokemons from './store/fetchPokemons'
import GameBoy from "./components/GameBoy";
import PokeList from "./components/PokeList";
import Loader from './components/Loader';
import MyPokeList from './components/MyPokeList';

const App = ({ click, fetchPokemons, pending, pokemons, showPokemon, catchPokemon }) => {
  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])
  useEffect(() => {
    console.log(pokemons);
  }, [pokemons])
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 744px)");
    // addlistener c'est comme addeventlisterner pour les medias queries en JS
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    }

  })

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }
  console.log(smallScreen);
  return (
    <div className="App">
      {pending ?
        <Loader />
        :
        <>
          {!smallScreen &&
            <>
              <MyPokeList
                pokemons={pokemons}
              />
              <GameBoy
                showPokemon={() => showPokemon(pokemons)}
                catchPokemon={catchPokemon}
              />
              <PokeList />
            </>
          }


          {smallScreen &&
            <>
              <GameBoy
                showPokemon={() => showPokemon(pokemons)}
                catchPokemon={catchPokemon}
              />
              <PokeList />
              <MyPokeList
                pokemons={pokemons}
              />
            </>
          }
        </>
      }
    </div>
  );
};
const mapStateToProps = ({ pending, pokemons, click }) => {
  return {
    pending,
    pokemons,
    click
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // ici autre manière de faire, on passe une fonction qui lance l'action
    fetchPokemons: () => dispatch(fetchPokemons()),
    showPokemon: pokemons => dispatch(showPokemonAction(pokemons)),
    catchPokemon: () => dispatch(catchPokemonAction()),
    // manière plus tradi de lancer une action
    click: () => dispatch({ type: CLICK })
  }
}
// puis le passer à connect pour enfin le passer en props au composant 
export default connect(mapStateToProps, mapDispatchToProps)(App)
