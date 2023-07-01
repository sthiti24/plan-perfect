import React from 'react'
import SingleTodo from './SingleTodo'
import './singleTodo.css'

interface Props{
  tasks:string[];
  deleteFunction:(text:string)=>void;
  editFunction:(oldText:string,newText:string)=>void;
}

const List:React.FC<Props> = ({tasks,editFunction,deleteFunction}) => {

 const [taskList,setTaskList] = React.useState<string[]>([])

 React.useEffect(() => {
   setTaskList(tasks)
 }, [tasks])
 



  return (
      <ul style={{listStyle:"none"}}>

      {taskList.map((todo)=>{return <li>{<SingleTodo task={todo}
       editFunction = {editFunction} 
      deleteFunction={deleteFunction}/>}</li>})}

      </ul>    
  )
}

export default List;
