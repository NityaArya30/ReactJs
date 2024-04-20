import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")

  return (
   <div className="w-full h-screen duration-200"
    style = {{backgroundColor: color}} >

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
<div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full px-3 py-2">

  <button onClick={() => setColor("red")}  
  className="outline-none px-4 py1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>

  <button onClick={() => setColor("green")}  
  className="outline-none px-4 py1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>

  <button onClick={() => setColor("black")}  
  className="outline-none px-4 py1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>black</button>

  <button onClick={() => setColor("blue")}  
  className="outline-none px-4 py1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>

  <button onClick={() => setColor("orange")}  
  className="outline-none px-4 py1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}}>orange</button>

  <button onClick={() => setColor("purple")}  
  className="outline-none px-4 py1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>purple</button>
{/* refresh krenge to vps pink ajaega kyuki setState m to initially pink h to reload p vps start hga aur pink laadega */}
</div>
</div>
   </div>
  )
}

export default App
