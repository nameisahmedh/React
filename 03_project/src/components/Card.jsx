import React from "react";

// How Props Work
// Passing Data: You pass props to a component in the same way you add attributes to an HTML tag.

// JavaScript

// <Welcome name="Sara" />
// Here, name is the prop, and "Sara" is the value.

// Receiving Data: Inside the Welcome component, you receive props as a single object argument. You can then access the passed data using dot notation.

// JavaScript

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// Read-Only: The most important rule about props is that they are read-only 🔒. A component should never modify its own props. If a component needs to change a value, it should use state instead. This ensures a one-way data flow, making your application's data predictable and easier to debug.

const Card = (props) => {  // here we can directly receieve as {title,developer} as but we need to access it as {title}, {developer} 
    console.log(props.title)
  return (
    <div>
      <div className="p-4 bg-white rounded-lg shadow text-sm max-w-80">
        <img
          className="rounded-md max-h-40 w-full object-cover"
          src="https://images.unsplash.com/photo-1560264418-c4445382edbc?q=80&w=400"
          alt="officeImage"
        />
        <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
          {props.title} <span>Developer is {props.developer}</span>
        </p>
        <p className="text-gray-500 mt-3 ml-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore..
        </p>
        <button
          type="button"
          className="bg-indigo-600 mt-4 mb-3 ml-2 px-6 py-2 font-medium rounded text-white"
        >
          {props.btnText || "Go back"} 
          {/*  If there is no button text then show Go back or directly we can give in the props const Card = ({btnText = "Go back"}) here this is set to default */}
        </button>
      </div>
    </div>
  );
};

export default Card;
