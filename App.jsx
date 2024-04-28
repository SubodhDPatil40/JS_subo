import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter,setCounter]= useState(100)
  //let counter = 101;

  const addValue = () =>{
    console.log("Value Added");
    counter = counter+1;
    setCounter(counter);
  }

  const removeValue =()=>{
    console.log("Value Removed");
    setCounter(counter-1);
  }

  return (
    <>
      <h1>React basics</h1>
      <h2>Counter : {counter} </h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick = {removeValue}
      >Remove Value</button>

    </>
  )
}
export default App
