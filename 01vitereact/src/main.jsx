import React from 'react'
import ReactDOM from 'react-dom/client'
//import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'


function MyApp() {
  return  (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).
render(


  //ye object h ye executr nhi hoega aise simple likho aise func execute hte hein  
  //<reactElement />
  
   reactElement
   //anotherElement
    //<App />
    //<MyApp />
    //MyApp ()
  
)
