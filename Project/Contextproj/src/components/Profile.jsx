import React,{ useContext } from "react"
import UserContext from "../Context/UserContext"

function Profile() {
        const{ user } = useContext(UserContext)

  if(!user) return <div>please login</div>
  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
    </div>
  )
}

export default Profile
