import React from 'react'
import { useSelector } from 'react-redux'
import "./styles.css"
import Bookmarkcard from './bookmarkcard'
function Bookmarks() {
  const bookmarks = useSelector((state) => state.pokemons.bookmarks)
  return (
    <div className='grid-container'>
      {
        bookmarks?.map((pokemon, index) => {
          return (<div key={index}>
              <Bookmarkcard pokemon={pokemon}></Bookmarkcard>
          </div>)
        })
      }
    </div>
  )
}

export default Bookmarks