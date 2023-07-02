import React from 'react'
import SingleTodo from './SingleTodo'
import './singleTodo.css'

interface Props{
  key:string;
  tasks:string[];
  deleteFunction:(text:string)=>void;
  editFunction:(oldText:string,newText:string)=>void;
}

const List:React.FC<Props> = ({key,tasks,editFunction,deleteFunction}) => {

  return (
      <ul style={{listStyle:"none"}}>

      {tasks.map((todo)=>{return <li key={todo}>{<SingleTodo task={todo}
       editFunction = {editFunction} 
      deleteFunction={deleteFunction}/>}</li>})}

      </ul>    
  )
}

export default List;
