import React from 'react'
import SingleTodo from './SingleTodo'
import './singleTodo.css'

interface Props{
  tasks:string[]
}

const List:React.FC<Props> = ({tasks}) => {
//delete function


  return (
      <ul style={{listStyle:"none"}}>
      {tasks.map((todo)=>{return <li>{<SingleTodo task={todo}/>}</li>})}
      </ul>    
  )
}

export default List;
