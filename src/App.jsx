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
import fetchApiforPokemonIds from './hooks/fetchApiforPokemonIds'
function App() {
  const [selectedability, setselectedAbility] = useState('')
  const [selectedspecies,setselectedspecies]=useState('')
  const [selectedhabitat,setselectedHabitat]=useState('')
  const [selectednext,setselectednext]=useState('')
  const bookmarks=useSelector((state)=>state.pokemons.bookmarks)
  const [page, setPage] = useState(0);

//  console.log(hasMore);
  const observerTarget = useRef(null);
  //const hasMore=true;
  const pokemons=useSelector((state)=>state.pokemons.pokemons)

  function gettingresults(hello,results){
    if(hello==='ability'){
      return results?.results?.map((k)=>k.name)
    }
    return results?.results?.map((k)=>({name:k.name,url:k.url}));
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
        console.log("use effect triggered")
        if (entries[0].isIntersecting) {
          setPage(prevPage => prevPage + 20);
        }
      },
      { threshold: 0.4 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [page]);
  


  return (
    <> 
     <Dropdown filterType="species" filterData={species} onDataChange={onDataChange}  ></Dropdown>
     <Dropdown filterType="Ability" filterData={abilities} onDataChange={onDataChange} ></Dropdown>
     <Dropdown filterType="Habitat" filterData={habitat} onDataChange={onDataChange} ></Dropdown>
  
     { (bookmarks.length == 0) ? (<div>Not Bookmarked Pokemans</div>):(
      
        <div>
            <h3>Bookmarks</h3>
            <Bookmarks/>
        </div>
    ) 
     
    }
     <div>
      <Details pokemons={pokemons}/>
      <div ref={observerTarget} style={{ height: '50px' }}></div>
     </div>
    
     
    </>
  )
}

export default App
