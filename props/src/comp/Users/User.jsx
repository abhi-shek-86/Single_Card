import React from 'react'

const User = (u) => {
  return (
    <div id='card'>
        <img src={u.single.image} alt="" />
        <h3>{u.single.firstname}</h3>
        <p><b>Gender :</b> {u.single.gender}</p>
        <p><b>Phone :</b> {u.single.phone}</p>

    </div>
  )
}

export default User