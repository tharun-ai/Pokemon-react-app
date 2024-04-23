import React, { useEffect, useState } from 'react'
import fetchApiforPokemons from '../../hooks/fetchApiforPokemons'
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { bookmarkPokemon } from '../../store/pokemonReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cards({ url }) {
  const [pokemon, setPokemon] = useState({})
  const j = fetchApiforPokemons(url)
  const bookmarks = useSelector((state) => state.pokemons.bookmarks);
  const [notification, setNotification] = useState('');
  const dispatch = useDispatch()
  useEffect(() => {
    setPokemon(j)
  }, [j])

  const bookmarkHandler = (pokemon) => {
   const isBookmarked = bookmarks.some(p => p.name === pokemon.name);
    if (isBookmarked) {
      console.log(toast)
      // toast.success(`${pokemon.name} is bookmarked.`, {
      //   position: "top-center",
      //   autoClose:5000,
      //   hideProgressBar: false,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light"
      // });
      
       
    } else {
      dispatch(bookmarkPokemon(pokemon))
      // toast.success(`${pokemon.name} is bookmarked.`, {
      //   position: "top-center",
      //   autoClose:5000,
      //   hideProgressBar: false,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light"
      // });
      
    }
  }
  return (
    <div className='card'>
      <img src={pokemon?.sprites?.front_default} loading="lazy" alt={pokemon?.name}></img>
      <div className='card-detail'>
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
        <button className='bookmark-button' onClick={(e) => bookmarkHandler(pokemon)}>
          <span className="bookmark-icon"></span>
          Bookmark</button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="light"
        transition:Bounce />
    </div>

  )
}

export default Cards