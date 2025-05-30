import React from 'react'
import '../../index.css'

const Recipe = (r) => {
  return (
    <div id='card'>
        
        <img src={r.single.image} alt="" />
        <h3>{r.single.name}</h3>
        <h4>Cuisine : {r.single.cuisine}</h4>

    </div>

  )
}

export default Recipe;