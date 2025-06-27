import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    // const [data,setdata]=useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Suryansh-Soni')
    //         .then(response =>   response.json())
    //         .then(data => {
    //             console.log(data)
    //             setdata(data)
    //         })
    //     },[])

  const data = useLoaderData();


  return (
    <div>
        My GitHub :{data.name} <br />
      GitHub Followers:{data.followers}
      <img className=""src={data.avatar_url} alt="Git Image" width={300} />
    </div>
  )
}

export default GitHub

export const Githubinfoloder =async () => {
    const response=await fetch('https://api.github.com/users/Suryansh-Soni')
    return response.json()
    
}
