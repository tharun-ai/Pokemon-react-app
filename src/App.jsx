  import { useState ,useEffect,useRef } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import Dropdown from './components/dropdown/Dropdown'
  import fetchApi from './hooks/fetchApi'
  import Details from './pages/Details/Details'
  import { Provider, useSelector } from 'react-redux'
  import store from './store/store'
  import Bookmarks from './pages/bookmarks/Bookmarks'
  import useFetchApiforPokemonIds from './hooks/fetchApiforPokemonIds'
  import { useDispatch } from 'react-redux'
  import { addMovies } from './store/pokemonReducer'
  function App() {
    const [selectedability, setselectedAbility] = useState('')
    const [selectedspecies,setselectedspecies]=useState('')
    const [selectedhabitat,setselectedHabitat]=useState('')
    const [selectednext,setselectednext]=useState('')
    const bookmarks=useSelector((state)=>state.pokemons.bookmarks)
    const [page, setPage] = useState(0);
    const dispatcher=useDispatch();

  //  console.log(hasMore);
    const observerTarget = useRef(null);
    //const hasMore=true;
    const pokemons=useSelector((state)=>state.pokemons.pokemons)
    //const  fetchApiforPokemonIds  = useFetchApiforPokemonIds();

    function gettingresults(hello,results){
      if(hello==='ability'){
        return results?.results?.map((k)=>k.name)
      }
      return results?.results?.map((k)=>({name:k.name,url:k.url}));
    }

    function hello(){
      //console.log("hello");
      //FetchApiforPokemonIds(0);
    }

    const abilities=gettingresults('ability',fetchApi('ability'));
    const species=gettingresults('ability',fetchApi('pokemon-species'));
    const habitat=gettingresults('ability',fetchApi('pokemon-habitat'));
    const onDataChange=(filterType,e)=>{
      switch(filterType.filterType){
        case 'species':
            setselectedspecies(e);
            
          break;
        case 'Ability':
            setselectedAbility(e);
          
          break;
        case 'Habitat':
          setselectedHabitat(e);
          break;
          default:

      }
    }

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          setPage((prevPage) => {
            const nextPage = prevPage + 20;
            return nextPage;
          });
        },
        { threshold: 0.5 }
      );

      if (observerTarget.current) {
        observer.observe(observerTarget.current);
      }

      return () => {
        if (observerTarget.current) {
          observer.unobserve(observerTarget.current);
        }
      };
    }, []);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=${20}`).then(
          (res)=>res=res.json()
      ).then(
        (result)=>{dispatcher(addMovies(result.results))}
      )
      
    }
    , [page]);
    


    return (
      <> 
      { (bookmarks.length == 0) ? (<></>):(
        
          <div>
              <Bookmarks/>
          </div>
      ) 
      
      }
        <div className='heading'>Pokemon Collection</div>
        <Details pokemons={pokemons}/>
       
      <div ref={observerTarget} style={{ height: '100px' }}></div>
      
      </>
    )
  }

  export default App
