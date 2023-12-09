
import React, { useEffect, useState } from 'react'

function fetchApiforPokemons(url) {
  const [data,setdata]=useState({})
 
  useEffect(()=>{
   fetch(url).then(res=>res.json()).then((res)=>{setdata(res)}).catch((er)=>console.log(err))
  },[url])
  return data;
}

export default fetchApiforPokemons