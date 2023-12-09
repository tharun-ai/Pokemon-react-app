import React, { useEffect, useState } from 'react'
import fetchApiforPokemons from '../../hooks/fetchApiforPokemons'
import "./styles.css"
import { useDispatch } from 'react-redux'
import { bookmarkPokemon } from '../../store/pokemonReducer'

function Cards({ url }) {
  const [pokemon, setPokemon] = useState({})
  const j = fetchApiforPokemons(url)
  const dispatch=useDispatch()
  useEffect(() => {
    setPokemon(j)
  }, [j])
  
  const bookmarkHandler=(pokemon)=>{
    console.log(pokemon);
    dispatch(bookmarkPokemon(pokemon))
  }
  return (
    <div className='card'>
      <img src={pokemon?.sprites?.front_default}></img>
      <div className='card-detail'>
        <label>name:
          <span>{pokemon.name}</span>
        </label>
        {/* <p>name:{pokemon.name}</p> */}
        <p>weight:{pokemon.weight}</p>
        <p>Height:{pokemon.height}</p>
        <button onClick={(e)=>bookmarkHandler(pokemon)}>Bookmark</button>
      </div>
    </div>
  )
}

export default Cards