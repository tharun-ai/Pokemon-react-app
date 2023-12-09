import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemons:[],
  bookmarks:[]
}

const pokemonSlicer = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    'addMovies':(state,action)=>{
      // console.log(action.payload);
        state.pokemons.push(...action.payload)
    },
    
    'bookmarkPokemon':(state,action)=>{
      if (!Array.isArray(action.payload)) {
        state.bookmarks.push(action.payload);
      } else {
        console.error('Payload for bookmarkPokemon must be a single object, not an array');
      }
      console.log(state.bookmarks);
    },
    'removebookmarkPokemon':(state,action)=>{
      //  state.bookmarks.push(action.payload);
      //  console.log(state.bookmarks);
      if (!Array.isArray(action.payload)) {
        state.bookmarks=state.bookmarks.filter((pokemon)=>pokemon.name!==action.payload)
      } else {
        console.error('Payload for bookmarkPokemon must be a single object, not an array');
      }
      console.log(state.bookmarks);
    }
  }
})

export const { addMovies,bookmarkPokemon,removebookmarkPokemon } = pokemonSlicer.actions

export default pokemonSlicer.reducer