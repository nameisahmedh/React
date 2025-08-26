import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Return This</h1>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children : "Click me to visit Google"
// } -----> The syntax of the object which the render is expecting is not correct so thats the reason eventhough the code is correct it showing an error while implementing


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

// const anotherUser = "Dravid"
const reactElementNew = React.createElement(
  'a',{
    href:"https://google.com",target:'_blank'
  },
  "click me to visit google",
  // anotherUser as it can be used directly as it is evaluted one again we cannot keep any condition like for or if here as it is an Object {if()} it cannot possible 
  
)

createRoot(document.getElementById('root')).render(
 
  // MyApp()
  // reactElement
  // anotherElement
  reactElementNew
  // <App/>
 
)
