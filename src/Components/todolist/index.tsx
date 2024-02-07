import React from 'react'
import Styles  from './index.module.scss'
import { inputtype } from '../../types/inputtype'

export type todos={
    todo:inputtype[],
    settodo: React.Dispatch<React.SetStateAction<inputtype[]>>;
}
export const TodoList:React.FC<todos> = ({todo,settodo}) => {

    const deleteTodo = (index: number) => {
        settodo(todo.filter((_, i) => i !== index));
      };
    
  return (
      
    <div className={Styles.todolist}> 
    {todo.map((item,index)=>(
   <div key={index}>
    <div className={Styles.todoitem} >
       <div className={Styles.item}>{item.dos}</div>
       <div>{item.deadline}</div>
       <button className={Styles.deletebutton } onClick={() => deleteTodo(index)}>Delete</button>
    </div>
    </div> 
    ))}
   </div>
  )
}
