import React from 'react'
import  { useRef, useState,useCallback  } from 'react'
import Nav from './source/Nav'
import Footer from './source/Footer'
import { MdEdit } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import Useref from './Useref';

function Usecallback() {
  const[todo,setTodo]=useState([])
    const[userInput,setUserInput]=useState("")
  
  
  
    const ref =useRef(null)
  
    const addTodoHandler=useCallback(()=>{
      const oldTodo=[...todo]
      if (userInput===""){
        return;
  
      }else{
        const newTodo={
          id: Date.now(),
          text: userInput,
        };
        const updatedTodos =oldTodo.concat(newTodo)
        setTodo(updatedTodos)
        setUserInput("")
      
      }
    },[todo,userInput])
  
    
    const deleteTodo = useCallback((id)=>{
      const oldTodo =[...todo]
     const neeTodo=oldTodo.filter((e)=>e.id!==id)
      setTodo(neeTodo)
  
     },[todo])
  return (
    <div>
       
        <div className='container'>
      <span style={{ color: 'red', marginLeft: '30px', padding: '10px' }}>
          Total Todos: {todo.length} 
        </span>
        <div className='input'>
          <input type='text' style={{fontSize:"20px",padding:"10px"}} value={userInput} onChange={(e)=>setUserInput(e.target.value)} ref={ref}></input>
          <button onClick={addTodoHandler}>Add</button>
        </div>
        <div className='todos'>
          {todo.map((e)=>(
            <div className='child'>
              <div>{e.text}</div>
              <div>
                   <FaDeleteLeft className='icon' onClick={()=>deleteTodo(e.id)}/></div>
              
            </div>
          ))}
         
        </div>
        
      </div>
      
      <Footer/>
    </div>
  )
}

export default Usecallback