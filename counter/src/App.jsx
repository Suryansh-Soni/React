import { useState } from 'react'
import './App.css'

function App() {
  let [counter , setcounter]=useState(0);
  const increment=()=>{
    counter=counter+1;
     setcounter(counter)
  }
  const decrement=()=>{
    if(counter<=0){
      
    }else{
    counter=counter-1;
    }
     setcounter(counter)
  }
  return (
    <>
     {/* <> is called fragment </> */}
     <h1>Suryansh Soni</h1>
      <h2>counter :{counter}</h2> 
      <button onClick={increment}>Inc</button> <br />
      <button onClick={decrement}>Dec</button>
    </>
  )
}

export default App
