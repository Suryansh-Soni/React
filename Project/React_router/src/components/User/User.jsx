import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const  {userid} = useParams()
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600 " >
      User: {userid } 
    </div>
  )
}

export default User
