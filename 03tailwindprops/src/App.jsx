import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "nitya",
    age:19
  }
  let newArr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
   
     <Card username ="coffeaurnitya"  btnText="click me" />  
     <Card username="nitya" />

    </>
  )
}

export default App
/*someObj= {myObj}*/  /*someObj={newArr}*/
  /* ye jo hm component bnate h isme hm ek props bnate h taaki us components m agr koi chng krna h to ye props krenge */