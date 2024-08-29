import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  // let myObj = {
  //   username:"Rutu",
  //   age:21
  // }

  // let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-pink-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username = "Rutu Patel" btnText = "Click me"/>
      <Card username = "Jagruti Patel" btnText = "visit here"/>
    </>
  )
}

export default App
