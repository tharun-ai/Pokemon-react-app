import { configureStore } from '@reduxjs/toolkit'

import pokemonReducer from './pokemonReducer'

export default configureStore({
  reducer: {
    pokemons: pokemonReducer
  }
})