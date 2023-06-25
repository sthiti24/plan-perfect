import React, { useRef, useState } from 'react'
import './style.css'
import List from './List'

const InputField:React.FC= () => {

  const [todo,setTodo] = useState<string>("")
  const [todos,setTodos] = useState<string[]>([])

  function handleChange(event:React.ChangeEvent<HTMLInputElement>){
   setTodo(event.target.value)
  }

  function addToList(todo:string){
    if(todo){
      setTodos([...todos,todo])
    }
  }
  return (
    <div style= {{width:"100%", display:"flex",alignItems:"center",flexDirection:"column",overflowX:"clip"}} >
       <div className='input'>
          <input type="text" placeholder='Enter a task'
         className='input-box'
         onChange ={handleChange}/>
         
          <button className='btn' onClick={()=>addToList(todo)}>Go</button>
       </div>
       <br></br>
      <div style={{position:"relative",width:"85%"}}>
         <List tasks = {todos} />
      </div>
    </div>
  )
}

export default InputField