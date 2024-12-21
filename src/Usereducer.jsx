import React, { useReducer, useState } from 'react'
import Footer from './source/Footer'
import { FaDeleteLeft } from "react-icons/fa6";


function Usereducer() {
    const reducer=(state,action)=>{
        switch(action.type){
            case 'Add':
            return [...state,{id:Date.now(),text:action.payload},];
            case 'del':
                return state.filter(e=>e.id!==action.payload)
            default:
                return state

        }
    
    }








    const[state,dispatch]=useReducer(reducer,[])
    const[input,setInput]=useState("")



   









    const handleButton=()=>{
        if(input.trim()===""){
            return;
        }else{
            dispatch({type:"Add", payload:input})
            setInput("")
        }
    }


    const deleteTodo=(id)=>{
       dispatch({type:"del", payload:id});
    }


  return (
    <div>
       <div className='container' style={{backgroundColor:"#6b8e23"}}>
        <span>total:{state.length}</span>
        <div className='input'>
            <input type='text' style={{padding:"10px"}} onChange={(e)=>setInput(e.target.value)} value={input}></input>
            <button onClick={handleButton}>Add</button>
        </div>
        <div className='todo'>
            {state.map((e)=>(
                <div className='child' key={e.id}><div>{e.text}</div>
                 <FaDeleteLeft
                  className="icon"
                  onClick={() => deleteTodo(e.id)}/>
                </div>

            ))}

        </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Usereducer