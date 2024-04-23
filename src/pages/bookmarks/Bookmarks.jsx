import React from 'react'
import { useSelector } from 'react-redux'
import "./styles.css"
import Bookmarkcard from './Bookmarkcard'
function Bookmarks() {
  const bookmarks = useSelector((state) => state.pokemons.bookmarks)
  return (
    <div className='bookmark'>
     
      <div className='bookmark-heading'>
      <h3 >Bookmarked Items</h3>
      </div >
      <div className='bookmark-container'>
      {  
        bookmarks?.map((pokemon, index) => {
          return (<div  key={index}>
              <Bookmarkcard key={index} pokemon={pokemon}></Bookmarkcard>
          </div>)
        })
      }
      </div>  
    </div>
  )
}

export default Bookmarks