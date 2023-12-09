import { useEffect, useState } from 'react';
import {addMovies} from '../store/pokemonReducer'
import { useDispatch } from 'react-redux';

function fetchApiforPokemonIds( page) {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const dispatcher=useDispatch();
  const [kage,setKage]=useState(page)
  useEffect(() => {
      console.log(page);
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=${20}`).then(
          (res)=>res=res.json()
      ).then(
        (result)=>{dispatcher(addMovies(result.results))}
      )
      
    }
    , [kage]);

  return [hasMore ];
}

export default fetchApiforPokemonIds;
