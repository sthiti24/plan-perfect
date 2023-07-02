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
    // console.log("outside if")
    const i = todos.indexOf(todo)
    // console.log(i)
    if(todo && (i<0)){
      console.log("inside if",todo)
      setTodos([...todos,todo])
    }
  }
  function handleDelete(text: string) { 
    setTodos((prevTodos) => prevTodos.filter((item) => item !== text)); 
  } 
 
  function handleEdit(oldText: string, newText: string) { 
    const i = todos.indexOf(oldText); 
    if (i !== -1) { 
      const newTaskList = [...todos]; 
      newTaskList[i] = newText; 
      setTodos(newTaskList); 
    } 
  } 

  return (
    <div style= {{width:"100%", display:"flex",
    alignItems:"center",flexDirection:"column",overflowX:"clip"}} >
       <div className='input'>
          <input type="text" placeholder='Enter a task'
         className='input-box'
         onChange ={handleChange}/>
         
          <button className='btn' onClick={()=>addToList(todo)}>Go</button>
       </div>
       <br></br>
      <div style={{position:"relative",width:"85%"}}>
         <List key={todos.join(',')} tasks = {todos} deleteFunction={handleDelete} editFunction={handleEdit}/>
      </div>
    </div>
  )
}

export default InputField