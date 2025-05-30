import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div id='navbar'>
            <h3>Bro Mart</h3>
            <div id='nav-buttons'>
                <Link to={"/Products"}><button className="nav-link">Products</button></Link>
                {/* <Link to={"/Recipies"}><button className="nav-link">Reciepies</button></Link>
                <Link to={"/Users"}><button className="nav-link">Users</button></Link> */}
                <Link to={"/FavItems"} > <FaShoppingCart  style={{color:"black"}}/></Link>
                <Link to={"/WishList"}><FaHeart style={{color:"black"}} /></Link>
            </div>
        </div>

    
  )
}

export default Navbar;