
import { useEffect } from 'react';
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './component/ThemeBtn';
import Card from './component/card';
import { useState } from 'react';


function App() {
  const [themeMode,setThemeMode] = useState("light");
  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove('light','dark');
    document.querySelector("html").classList.add(themeMode);
  },[themeMode]);


  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
   
<div className=" min-h-screen items-center">
  <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-center mb-4">
      <ThemeBtn />
      </div>
      <Card/>
      <div className="w-full max-w-sm mx-auto 4">
      </div>
  </div>
</div>
</ThemeProvider>
  )
}

export default App
