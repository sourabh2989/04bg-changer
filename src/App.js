import React, { useState } from 'react'

function App() {
  const [color,setcolor]=useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className='flex flex-wrap justify-centerf gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl'>
          <button  onClick={()=>{setcolor("red")}}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}><b>Red</b></button>
          <button onClick={()=>{setcolor("green")}}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}}><b>Green</b></button>
          <button  onClick={()=>{setcolor("yellow")}} className='outline-none px-4 py-1 rounded-full text-black  shadow-lg' style={{backgroundColor:"yellow"}}><b>Yellow</b></button>
          <button onClick={()=>{setcolor("skyblue")}}  className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"skyblue"}}><b>Skyblue</b></button>
          <button  onClick={()=>{setcolor("black")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}><b>Black</b></button>
          <button  onClick={()=>{setcolor("blue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}><b>Blue</b></button>
          <button  onClick={()=>{setcolor("gold")}} className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"gold"}}><b>Gold</b></button>
          <button  onClick={()=>{setcolor("purple")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"purple"}}><b>Purple</b></button>

        </div>
      </div>
    </div>
  )
}

export default App

