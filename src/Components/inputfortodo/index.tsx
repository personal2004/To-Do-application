import React, { ChangeEvent, useState} from 'react'
import Styles  from './index.module.scss';
import { inputtype } from '../../types/inputtype';
export const Todo = () => {

    const [dos,setdos]=useState<string>('');
    const [deadline,setdeadline]=useState<number>(0);
    const [todo,settodo]=useState<inputtype[]>([]);

    const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
     if(event.target.className==='string'){
        setdos(event.target.value);
     }else{
        setdeadline(Number(event.target.value));
     }
    };
    const addtodo = () => {
      const newtodo:any=dos || 'N/A';
      settodo([
        ...todo,
        {
          dos:newtodo, 
          deadline: deadline || 0,
        },
      ]);
      setdos('');
      setdeadline(0);
    };

    const deleteTodo = (index: number) => {
      settodo(todo.filter((_, i) => i !== index));
    };
  
    
  return (
   <div className={Styles.todoapp}>
    <div className={Styles.todocontent}>
       <div className={Styles.todoinput}>
        <input 
         className='string'
         type='text'
         value={dos}
         placeholder='Type your Do '
         onChange={handleChange}
         />
        <input
         className='number' 
         type='number'
         value={deadline}
         placeholder='Enter your DeadLine for Completion'
         onChange={handleChange}
         />
       </div>
       <div className={Styles.todoaddbutton}>
       <button onClick={addtodo}>Add</button>
       </div> 
       </div>
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
   </div>
  )
}
