// Key Concepts
// The useState Hook returns an array with two elements: the current state value and a function to update it.

// State Variable: This variable holds the current value of the state. In your code, counter is the state variable.

// State Setter Function: This function is used to update the state variable. It triggers a re-render of the component, which is what makes changes visible in the UI. In your example, setCounter is the setter function.

// Why useState is Necessary
// Unlike regular JavaScript variables, state variables declared with useState are "watched" by React. When the setter function (setCounter) is called, React knows the state has changed and will automatically re-render the component with the new value. This is why simply incrementing counter (e.g., counter = counter + 1) doesn't work; React has no way of knowing that the value has changed.

import { useState } from "react";

function App() {
  // let counter = 1
  // const countIncrement =()=>{
  //   counter = counter +1
  //   console.log(counter)
  // } usually we use this like to change the counter value but it wont be carried to the UI of the react to carry the changes in the UI we need to use useState()
  let [counter, setCounter] = useState(0);

  const countIncrement = () => {
    console.log(counter);
    // counter = counter + 1
    // setCounter(counter) // This setCounter is used to do the modification in a state
    // if(counter<20){
    //   setCounter(counter+1)
    // }
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // setCounter((counter) => counter + 1);
    // setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);

    //       The primary difference between setCounter(counter + 1) and setCounter(counter => counter + 1) is how React handles state updates. The first approach uses the current value of counter at the time the function is called, while the second uses the previous state from the most recent update.

    // 1. Direct State Update: setCounter(counter + 1)
    // When you call setCounter(counter + 1), you are providing React with the next state value directly.

    // If you call this function multiple times in a row, React will batch these updates together for performance. However, because each call uses the value of counter from when the function was initially called, the value of counter won't be updated between the three calls.

    // Example:

    // counter is initially 0.

    // setCounter(counter + 1) becomes setCounter(0 + 1).

    // setCounter(counter + 1) becomes setCounter(0 + 1).

    // setCounter(counter + 1) becomes setCounter(0 + 1).

    // After all three calls are batched and executed, the final value of counter will be 1. The subsequent calls didn't see the update from the first call.

    // 2. Functional State Update: setCounter(counter => counter + 1)
    // When you call setCounter(counter => counter + 1), you are providing React with a function that receives the previous state as its argument.

    // React guarantees that the counter argument in this function is the most up-to-date state. This prevents race conditions and ensures each update is based on the result of the previous one. This is the preferred method when the new state depends on the previous state.

    // Example:

    // counter is initially 0.

    // setCounter(prevCounter => prevCounter + 1) becomes setCounter(0 + 1).

    // The next call, setCounter(prevCounter => prevCounter + 1), sees the updated state and becomes setCounter(1 + 1).

    // The final call sees the new state and becomes setCounter(2 + 1).

    // After all three calls are batched and executed, the final value of counter will be 3. This is because each update correctly built upon the previous one.
  };
  const countDecrement = () => {
    if (counter > 0) {
      console.log(counter);
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Hello Counter</h1>
      <p>Counter is : {counter}</p>
      <button onClick={countIncrement}>increase : {counter}</button>
      <button onClick={countDecrement}>decrease : {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
