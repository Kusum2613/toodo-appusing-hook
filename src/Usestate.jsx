import React, { useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import Footer from './source/Footer';
import "./index.css"

function Usestate() {
  const [state,setState]=useState([])
  const[input,setInput] =useState("")
  const handleButton=()=>{
    
    if (input.trim()===""){
      return
    }else{
      const newFill={
      id:Date.now(),
      text:input
    }
    
    const fill=state.concat(newFill)
    setState(fill)
    setInput("")
   
  }
}
  const deleteTodo = (id) => {
    const updatedTodos = state.filter((todo) => todo.id !== id); 
    setState(updatedTodos); 
  
  };

  
  
  return (
   <div>
    <div className='container' style={{backgroundColor:"brown" }}>
      <span>Total Todo:{state.length}</span>
      <div className='input'  >
      <input type='text' style={{padding:"10px",marginTop:"30px"}}value={input}  onChange={(e) => setInput(e.target.value)}></input>
      <button style={{height:"40px", marginTop:"30px"}} onClick={handleButton}>Add</button>
      </div>
      <div className='todos'>
      {state.map((e) => (
            <div key={e.id} className='child' style={{backgroundColor:"blue"}}>
              <div>{e.text}</div>
              <div>
              
                <FaDeleteLeft
                  className='icon'
                  onClick={() => deleteTodo(e.id)} 
                />
              </div>
            </div>
          ))}
        </div>
    </div>
      <Footer/>
      </div>
   
  )
}

export default Usestate