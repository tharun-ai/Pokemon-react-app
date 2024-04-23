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
        const isBookmarked = state.bookmarks.some(pokemon => pokemon.name === action.payload.name);
        if (!isBookmarked) {
          state.bookmarks.push(action.payload);}
          else {
            console.log(`${action.payload.name} is already bookmarked.`);
        }
      } else {
        console.error('Payload for bookmarkPokemon must be a single object, not an array');
      }
    },
    'removebookmarkPokemon':(state,action)=>{
      //  state.bookmarks.push(action.payload);
      //  console.log(state.bookmarks);
      if (!Array.isArray(action.payload)) {
        state.bookmarks=state.bookmarks.filter((pokemon)=>pokemon.name!==action.payload)
      } else {
        console.error('Payload for bookmarkPokemon must be a single object, not an array');
      }
    }
  }
})

export const { addMovies,bookmarkPokemon,removebookmarkPokemon } = pokemonSlicer.actions

export default pokemonSlicer.reducer