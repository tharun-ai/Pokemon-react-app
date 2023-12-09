import { useEffect, useState } from 'react';
import {addMovies} from '../store/pokemonReducer'
import { useDispatch } from 'react-redux';

function useFetchApiforPokemonIds( page) {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const dispatcher=useDispatch();
  useEffect(() => {
      console.log(page);
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=${20}`).then(
          (res)=>res=res.json()
      ).then(
        (result)=>{dispatcher(addMovies(result.results))}
      )
      
    }
    , [page]);

  return [hasMore ];
}

export default useFetchApiforPokemonIds;
