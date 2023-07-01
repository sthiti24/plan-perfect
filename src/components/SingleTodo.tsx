import React,{FC,useState,KeyboardEvent} from 'react'
import "./singleTodo.css"
import {AiFillEdit,AiTwotoneDelete} from "react-icons/ai"
import {MdDone} from "react-icons/md"

interface Props{
    task:string;
    deleteFunction:(text:string)=>void;
    editFunction:(oldText:string,newText:string)=>void;
}
const SingleTodo:FC<Props> = ({task,deleteFunction,editFunction}) => {

  const [text,setText] = useState<string>(task)
  const [done,setDone] = useState<boolean>(false)
  const [edit,setEdit] = useState<boolean>(false)
  // const [editedText,setEditedText] = useState<string>(task)


  return (
    <div className='todo'>
       <div className="text">
         {edit && !done?<input onChange={(event)=>{setText(event.target.value)}}
         onKeyDown={(event)=>{ if(event.key==="Enter"){document.getElementById('editBtn')?.click() ; setEdit(!edit)}} }/>
         :(done?<s>{text}</s>:text)}
        </div>
      <div className='buttons'> 
         <button className='icon-button'
          onClick={()=>{setDone(!done)}}>{<MdDone />}</button>

         <button className='icon-button'
          onClick={()=>deleteFunction(text)}>{<AiTwotoneDelete />}</button>

         <button className='icon-button'id="editBtn"
          onClick={()=>{setEdit(!edit);editFunction(task,text)}
         
        }>{<AiFillEdit />}</button>
      </div>
    </div>
  )
}

export default SingleTodo;