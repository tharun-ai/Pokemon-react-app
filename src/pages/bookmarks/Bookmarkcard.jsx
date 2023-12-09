import React from 'react'
import "./styles.css"
import {removebookmarkPokemon} from '../../store/pokemonReducer'
import { useDispatch } from 'react-redux'

function Bookmarkcard({pokemon}) {
    const dispatch=useDispatch()
    return (<div>
        <div className='card'>
          <img src={pokemon?.sprites?.front_default}></img>
          <div className='card-detail'>
            <label>name:
              <span>{pokemon.name}</span>
            </label>
            {/* <p>name:{pokemon.name}</p> */}
            <p>weight:{pokemon.weight}</p>
            <p>Height:{pokemon.height}</p>
            <button onClick={(e) => dispatch(removebookmarkPokemon(pokemon.name))}>UnBookmark</button>
          </div>
        </div>
      </div>)
  
}

export default Bookmarkcard