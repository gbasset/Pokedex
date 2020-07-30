import React from "react";

import "./GameBoy.css";
import { connect } from 'react-redux'
import Screen from "./Screen";

const GameBoy = ({ showPokemon, catchPokemon, click }) => {

  return (

    <div className="gameBoyContainer">
      <h2 className="gameBoyTry"> You Try : {click}</h2>
      <div className="gameboy">
        <div className="body">
          <div className="screen-box">
            <div className="power-box">
              <div className="power-light" />
              <div className="power-status">)))</div>
              <div className="power-text">POWER</div>
            </div>
            <div className="screen-display">
              <Screen />
            </div>
            <div className="gameboy-color-logo">
              <span className="logo-gb">GAME BOY </span>
              <span className="logo-color">
                <span className="logo-color-c">C</span>
                <span className="logo-color-o1">O</span>
                <span className="logo-color-l">L</span>
                <span className="logo-color-o2">O</span>
                <span className="logo-color-r">R</span>
              </span>
            </div>
          </div>

          <div className="nintendo-logo-body">Nintendo</div>
          <div className="button-box">
            <div className="arrow-group" onClick={() => showPokemon()}>
              <div className="up-box">
                <span className="arrow up" />
              </div>
              <div className="right-box" onClick={() => showPokemon()}>
                <span className="arrow right" />
              </div>
              <div className="down-box" onClick={() => showPokemon()}>
                <span className="arrow down" />
              </div>
              <div className="center-box" onClick={() => showPokemon()}>
                <span className="dent">
                  <span className="dent-highlight" />
                </span>
              </div>
              <div className="left-box" onClick={() => showPokemon()}>
                <span className="arrow left" />
              </div>
            </div>

            <div className="ab-button a" onClick={() => catchPokemon()}>
              <span className="button-text-height" >A</span>
            </div>

            <div className="ab-button b" onClick={() => showPokemon()}>
              <span className="button-text-height">B</span>
            </div>
          </div>


          <div className="rules">
            <p> Try to catch Pokemon with the button A</p>
            <p> Pass to another Pokemon with the button B or Direction button</p>
          </div>
        </div>
      </div>
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
export default connect(mapStateToProps)(GameBoy);
