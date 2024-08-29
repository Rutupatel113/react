import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(5)
  // let counter = 25

  const addValue = () => {
    console.log("clicked", Counter)
    // counter = counter  +  1
    if(Counter<20){
      Counter = Counter + 1
      setCounter(Counter)
    }
    
  } 

  const removeValue = () => {
    if(Counter>0)
      Counter = Counter - 1
      setCounter(Counter)
  } 

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {Counter}</h2>
      <button onClick={addValue}>Add Value</button><br></br><br></br>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
