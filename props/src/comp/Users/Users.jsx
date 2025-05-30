import React from 'react'
import UserData from './DataUsers.jsx'
import User from './User.jsx'
const Users = () => {
  return (
    <div id='container'>
        {
            UserData.users.map((user)=>{
                return(
                    <div>
                        <User single = {user} />

                    </div>
                )
            })
        }
    </div>
  )
}

export default Users