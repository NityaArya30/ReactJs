import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

      let [counter, setCounter] = useState(15)
      //let counter=15

      const addValue=()=>{
        //state aur ui change hoegi
       // console.log("clicked", counter)
        // counter=counter+1;
        // setCounter(counter);
       //same h upar vla aur neeche vla
       if (counter<20)
        //setCounter(counter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      }

      const decreaseValue=()=> {
        if (counter>0)
        setCounter(counter-1);
      }
  return (
    <>
    
      <h1> Project: 01 (Counter Project)</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
     
      <button
      onClick={decreaseValue}>
      Decrease Value</button>
      <p>{counter}</p>
    </>
  )
}

export default App
