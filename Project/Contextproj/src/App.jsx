import UserContext from "./Context/UserContext"
import "./App.css"
import React, { useState } from "react"
import UserContextProvider from "./Context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"

function App() {
  return (
    <UserContextProvider>
    <h1>Context API Example</h1>
    <p>This is a simple example of using Context API in React.</p>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
