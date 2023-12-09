
import React, { useEffect, useState } from 'react'

function fetchApi(url) {
  const [data,setdata]=useState({})

  useEffect(()=>{
   fetch(`https://pokeapi.co/api/v2/${url}`).then(res=>res.json()).then((res)=>{setdata(res)}).catch((er)=>console.log(err))
  },[url])
  return data;
}

export default fetchApi