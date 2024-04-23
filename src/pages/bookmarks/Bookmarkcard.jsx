import React from "react";
import "./styles.css";
import { removebookmarkPokemon } from "../../store/pokemonReducer";
import { useDispatch } from "react-redux";

function Bookmarkcard({ pokemon }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img src={pokemon?.sprites?.front_default}></img>
      <div className="card-detail">
        <label className="pokemon-label">
          <strong>Name:</strong>
          <span className="pokemon-name">{pokemon.name}</span>
        </label>
        <p className="pokemon-info">
          <strong>Weight:</strong> {pokemon.weight}
        </p>
        <p className="pokemon-info">
          <strong>Height:</strong> {pokemon.height}
        </p>
        <button
          className="unbookmark-button"
          onClick={(e) => dispatch(removebookmarkPokemon(pokemon.name))}
        >
          UnBookmark
        </button>
      </div>
    </div>
  );
}

export default Bookmarkcard;
