import React from 'react'
import fetchApi from '../../hooks/fetchApi'
import fetchApiforPokemons from '../../hooks/fetchApiforPokemons'
import Cards from '../../components/carddetail/Cards'
import { useSelector } from 'react-redux'
import './styles.css'
function Details({pokemons=[]}) {
  //const pokemons=useSelector((state)=>state.pokemons)
  return (
    <div className='grid-container'>
      {
        pokemons.map((pokemon,index)=>{
          return( <div key={index}>
               <Cards key={index} url={pokemon.url} ></Cards>
          </div>)
        })
      }
    </div>
  )
}

export default Details