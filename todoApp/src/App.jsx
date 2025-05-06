//import React, { useEffect } from 'react'
import { useState } from 'react'
import { Delete } from 'lucide-react';
 const App = () =>{
  const[input,setInput]=useState('');
  const[todos,setTodos]=useState([]);
  const handleInput =(e)=>{
    setInput(e.target.value);
  }
  const handleOnclick = () =>{
    setTodos([...todos,input]);
    setInput('');
  }
  // useEffect(()=>{
  //   console.log(todos);
  // },[todos])
  const deleteTodo =(i) =>{
    let newTodos = todos.filter((todos,index)=>index!==i);
    setTodos(newTodos);
  }
  return (
    <div className=' py-[12%] r h-screen w-screen flex flex-col justify-start items-center bg-zinc-200'>
     <h1 className='text-3xl font semibold mt-8'>TO DO APP</h1>
     <div className='mt-8 md:w-2/6 w-[80%]'>
      <div className='my-4 w-full'>
         <input 
         className='border border-grey-400 p-2 rounded-4xl w-full'
         type="text" 
         value={input}
         placeholder='enter your to do here...'
         onChange={handleInput}/>
      </div>
      <div>
        <button className='w-full bg-zinc-400 py-2 rounded-2xl text-white hover:scale-105' onClick={handleOnclick}>Add TODO</button>
      </div>
     </div>
     <div className='mt-8'>
      {todos[0]?todos.map((todo,i)=><div className='flex justify-between bg-zinc-600 md:[600px] w-[590px] mt-3 p-2 rounded-md text-white'><p >{todo}</p><Delete onClick={()=>deleteTodo(i)}/></div>):"there is no to do list..."}
      <div>
        <button className='w-full bg-red-500 rounded-lg text-white mt-8 p-2 hover:scale-105' onClick={()=>setTodos([])}>Delete All</button>
      </div>
     </div>
    </div>
  )
 }

export default App