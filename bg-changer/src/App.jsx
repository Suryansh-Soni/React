import { useState } from "react";

function App() {
const [bgColor, setBgColor] =useState ("white"); ;
  return (
    <>
    <div className="w-full h-screen flex items-center justify-center" style={{ backgroundColor: bgColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset x-0 px-0  rounded-lg shadow-lg bg-white ">
        <button className="bg-red-500 text-black px-4 py-2 m-2 rounded" onClick={() => setBgColor("red")}>Red</button>
        <button className="bg-green-500 text-white px-4 py-2 m-2 rounded" onClick={() => setBgColor("green")}>Green</button>
        <button className="bg-blue-500 text-white px-4 py-2 m-2 rounded" onClick={() => setBgColor("blue")}>Blue</button>      
      </div>
    </div>
    </>
  )
}

export default App
