import React,{FC} from 'react'
import "./singleTodo.css"
import {AiFillEdit,AiTwotoneDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"

interface Props{
    task:string;
}
const SingleTodo:FC<Props> = ({task}) => {
  return (
    <div className='todo'>
       <span className="text"> {task}</span>
      <div className='buttons'> 
       <button className='icon-button'>{<MdDone />}</button>
       <button className='icon-button'>{<AiTwotoneDelete />}</button>
       <button className='icon-button'>{<AiFillEdit />}</button>
       </div>
    </div>
  )
}

export default SingleTodo;