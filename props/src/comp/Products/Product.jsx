import React from 'react'
import Products from './Products.jsx'
import '../../index.css'
import { useNavigate } from 'react-router-dom'
const Product = (xyz) => {
    // console.log(xyz)
    const navigate = useNavigate()
    // console.log(navigate)
    return (

        <div id='card'>
            <img src={xyz.singleProp.thumbnail} alt="" />
            <h3>{xyz.singleProp.title}</h3>
            <p>{xyz.singleProp.category}</p>
            <p><b>Price: ₹</b> {xyz.singleProp.price}</p>
            <span onClick={()=>navigate(`/Products/${xyz.singleProp.id}`)}>view More</span>

        </div>

    )
}

export default Product