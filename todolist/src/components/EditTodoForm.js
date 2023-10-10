import React, {useState} from 'react';

export const EditTodoForm = ({task, editTask}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        // block hang dong default
        e.preventDefault();
        // check console
        console.log("show value edited: ",value);
            // đổi task
            editTask(value, task.id);
            // clean form input
            setValue('');
    };


    return(
        <form className= 'TodoForm' onSubmit = {handleSubmit} >
            {/* <h1 style={{color:'white',}}>Todo App</h1> */}
            <input type='text' className='todo-input' 
            placeholder='Change your task here!'
            value= {value}
            onChange={(e) => setValue(e.target.value)}/>
            
            <button type='submit' className='todo-btn'>Update </button>
        </form>
    )
}