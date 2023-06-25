import React from 'react'
import SingleTodo from './SingleTodo'
import './singleTodo.css'

interface Props{
  tasks:string[]
}

const List:React.FC<Props> = ({tasks}) => {

 const [taskList,setTaskList] = React.useState<string[]>([])

 React.useEffect(() => {
   setTaskList(tasks)
 }, [taskList])
 
 console.log("tasks",tasks)
 console.log(taskList)
 function handleDelete(text:string){
  console.log("inside delete function ",taskList,text)
    const i =  taskList.indexOf(text)
    if (i !== -1){
      console.log(i)
      const newTaskList = taskList.filter((item) => {return item !== text}); 
      setTaskList(newTaskList)
    }
   
 
 }
  return (
      <ul style={{listStyle:"none"}}>
      {taskList.map((todo)=>{return <li>{<SingleTodo task={todo} deleteFunction={handleDelete}/>}</li>})}
      </ul>    
  )
}

export default List;
