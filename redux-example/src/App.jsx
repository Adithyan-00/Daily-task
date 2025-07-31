import React from "react"
import { Routes , Route } from "react-router-dom"
import Home from "./Home"
import Count from "./count"
import Count5 from "./Count5"
import Data from "./Data"

function App() {

  return (
    <>
  
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/count" element={<Count/>}/>
        <Route path="/count5" element={<Count5/>}/>
        <Route path="/data" element={<Data/>}/>
    </Routes>
      
    </>
  )
}

export default App
