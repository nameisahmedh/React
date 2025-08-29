import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  //   The useRef() hook in React is a built-in hook that lets you create a mutable reference that persists for the entire lifecycle of a component without causing a re-render when its value changes. It's essentially a way to create a container for a value that you want to hold onto, much like an instance variable in a class component.

  // Example
  // Here's a common example of using useRef() to access a DOM element, specifically to focus an input field when the component first mounts.

  // JavaScript

  // import { useRef, useEffect } from 'react';

  // function FocusInput() {
  //   // 1. Create a ref object with an initial value of null.
  //   const inputRef = useRef(null);

  //   useEffect(() => {
  //     // 2. The ref's .current property is now the DOM node.
  //     // We can call methods on it, like .focus().
  //     if (inputRef.current) {
  //       inputRef.current.focus();
  //     }
  //   }, []); // The empty dependency array ensures this effect runs only once.

  //   return (
  //     <div>
  //       <p>This input will be focused automatically when the page loads:</p>
  //       {/* 3. Attach the ref to the JSX element. */}
  //       <input ref={inputRef} type="text" />
  //     </div>
  //   );
  // }

  // export default FocusInput;
  const passwordRef = useRef(null);

  //   useCallback() is a React hook that lets you memoize a function, preventing it from being recreated on every render unless its dependencies change. This can improve performance in your React applications, especially when passing callback functions to child components.

  // How it Works
  // The useCallback() hook accepts two arguments:

  // A function to be memoized: This is the callback function you want to prevent from being recreated.

  // An array of dependencies: These are the variables that the function relies on. If any of these dependencies change between renders, useCallback() will return a new version of the function. If they don't change, it will return the same function instance as the previous render.

  // The basic syntax looks like this:

  // JavaScript

  // const memoizedCallback = useCallback(
  //   () => {
  //     doSomething(a, b);
  //   },
  //   [a, b],
  // );
  // Here, doSomething is only recreated when a or b change.

  // Why Use It?
  // The primary reason to use useCallback() is to prevent unnecessary re-renders of child components. When a parent component re-renders, it creates new instances of any functions defined within it. If one of these new functions is passed as a prop to a child component, React will see it as a new prop, causing the child component to re-render, even if its state or props haven't truly changed.

  // By using useCallback(), you ensure the function passed as a prop remains the same instance across renders. This works particularly well with components that are wrapped in React.memo(), which memoizes a component and prevents it from re-rendering if its props are the same.

  // Here’s a simple analogy: think of a blueprint. Without useCallback(), you're creating a brand new blueprint (function) every time you want to build something (render the parent component). With useCallback(), you're reusing the original blueprint unless a key detail (dependency) changes.

  // When to Use It 💡
  // Use useCallback() when:

  // You're passing a callback function as a prop to a memoized child component (a component wrapped with React.memo()).

  // You're using a function as a dependency in another hook, like useEffect() or useLayoutEffect(). Using useCallback() here prevents an infinite loop or unexpected behavior.

  // You have an expensive function that you don't want to recreate on every render.

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+=-/:;'/'?><,.|}{[]";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,12); // we can specify the range of selection too
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect is a React Hook that lets you synchronize a component with an external system. It's used to manage side effects, which are actions that happen outside of the normal rendering process.

  // What are Side Effects?
  // Side effects are any actions that affect something outside the component's scope. Common examples include:

  // Data fetching from an API.

  // Directly manipulating the DOM, like setting the document title.

  // Setting up subscriptions to external data sources.

  // Using timers like setTimeout or setInterval.

  // How It Works
  // useEffect takes a function as its first argument, which is the code you want to run. It can also take an optional second argument, an array of dependencies, which controls when the effect re-runs.

  // Here's a simple example of changing the document title:

  // JavaScript

  // import { useEffect, useState } from 'react';

  // function DocumentTitleChanger() {
  //   const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     // This effect runs whenever 'count' changes
  //     document.title = `You clicked ${count} times`;
  //   }, [count]); // The dependency array

  //   return (
  //     <div>
  //       <p>You clicked {count} times</p>
  //       <button onClick={() => setCount(count + 1)}>
  //         Click me
  //       </button>
  //     </div>
  //   );
  // }

  // export default DocumentTitleChanger;
  // In this example, the useEffect hook:

  // Runs initially after the component renders for the first time.

  // Reruns every time the count state variable changes because count is in the dependency array [count].

  // This ensures that the document title is always in sync with the current click count.

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-3xl flex justify-center">Password Generator</h1>
      <div className="flex justify-center">
        <div className="max-w-md flex flex-col bg-purple-300  rounded-3xl mt-10 text-center p-5 gap-5 text-blue-700">
          <div className="flex gap-3">
            <input
              type="text"
              value={password}
              className="bg-gray-100 w-full h-10 p-5 rounded-2xl"
              placeholder="generate password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipBoard}
              className="bg-blue-600 p-2 text-white rounded-lg cursor-pointer"
            >
              Copy
            </button>
          </div>
          <div className="flex gap-6">
            <div className="range">
              <input
                type="range"
                min={8}
                max={50}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length({length})</label>
            </div>
            <div className="number">
              <input
                type="checkbox"
                defaultChecked={numAllowed}
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label>Number</label>
            </div>
            <div className="char">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
