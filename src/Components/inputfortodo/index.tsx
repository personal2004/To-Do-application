import React, { ChangeEvent, useState} from 'react'
import Styles  from './index.module.scss';
import {TodoList} from '../todolist/index';
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

  
    
  return (
   <>
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
       <div className={Styles.listheader} >
         <div>Tasks</div>
         <div>Days</div>
         <div>Cancel</div>
       </div>
       <TodoList todo={todo} settodo={settodo}/>
   </div>
   </>
  )
}
