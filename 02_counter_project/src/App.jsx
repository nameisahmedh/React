// Key Concepts
// The useState Hook returns an array with two elements: the current state value and a function to update it.

// State Variable: This variable holds the current value of the state. In your code, counter is the state variable.

// State Setter Function: This function is used to update the state variable. It triggers a re-render of the component, which is what makes changes visible in the UI. In your example, setCounter is the setter function.

// Why useState is Necessary
// Unlike regular JavaScript variables, state variables declared with useState are "watched" by React. When the setter function (setCounter) is called, React knows the state has changed and will automatically re-render the component with the new value. This is why simply incrementing counter (e.g., counter = counter + 1) doesn't work; React has no way of knowing that the value has changed.



import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 1
  // const countIncrement =()=>{
    //   counter = counter +1
    //   console.log(counter)
    // } usually we use this like to change the counter value but it wont be carried to the UI of the react to carry the changes in the UI we need to use useState()
    let [counter,setCounter] = useState(0)

    const countIncrement = () =>{
      console.log(counter)
      // counter = counter + 1
      // setCounter(counter) // This setCounter is used to do the modification in a state
      if(counter<20){
        setCounter(counter+1)
      }
    }
    const countDecrement = () =>{
      if(counter>0){
        console.log(counter)
        setCounter(counter-1)
      }
    }
    return(
    <>
    <h1>Hello Counter</h1>
    <p>Counter is : {counter}</p>
    <button onClick={countIncrement}>increase : {counter}</button>
    <button onClick={countDecrement}>decrease : {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
