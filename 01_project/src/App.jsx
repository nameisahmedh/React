import Coffee from "./coffee"

function App() {
 
  const User = "rahul"
  // {} the inside which is used in Object is an evaluated expression again we cannot use any if or for loop inside an Object
  return (

      <>
        <h1>Heyyy {User}</h1>
        <Coffee/>
      </>
  
  )
}

export default App
