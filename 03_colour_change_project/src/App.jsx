import React, { useState } from 'react'
import Button from './components/Button'


const App = () => {
  const [color,setColor] = useState('gray')
  return (
    <div className='w-full h-screen flex justify-center flex-wrap' style={{backgroundColor:color}}>
      
      <div className='flex flex-wrap absolute bottom-0 mb-12  bg-white px-4 py-2 rounded-2xl gap-2'>
        {/* <button className='bg-red-500 rounded-2xl px-5 py-2 flex flex-wrap justify-center text-white ' onClick={()=>{setColor("red")}}>red</button>
        <button className='bg-green-500 rounded-2xl px-5 py-2 flex flex-wrap justify-center text-white 'onClick={()=>{setColor("green")}}>green</button>
        <button className='bg-blue-500 rounded-2xl px-5 py-2 flex flex-wrap justify-center text-white 'onClick={()=>{setColor("blue")}}>blue</button> */}
        <Button color = "red" onClick={()=>{
          setColor("red")
        }}/>
        <Button color = "blue" onClick={()=>{
          setColor("blue")
        }}/>
        <Button color = "green" onClick={()=>{
          setColor("green")
        }}/>

        // Compare to both the one which is commented is more efficient because it only rendersin the App.jsx but the below code renders in App.jsx and Button.jsx too 
        
      </div>
      
    </div>
  )
}

export default App
