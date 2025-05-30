import React from 'react'
import DishData from './DishData.jsx'
import Recipe from './Recipe.jsx'

const Recipies = () => {
  return (
    <div id='container'>
        {
            DishData.recipes.map((item)=>{
                return(
                    <div>
                        <Recipe single = {item} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Recipies