import React, {useState} from 'react';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        // block hang dong default
        e.preventDefault();
        // check console
        console.log("show value: ",value);
        if(value) {
            // Them task
            addTodo(value);
            // clean form input
            setValue('');
        }
    };
    return(
        <form className= 'TodoForm' onSubmit = {handleSubmit} >
            <input type='text' className='todo-input' 
            placeholder='What is the task today ?'
            value= {value}
            onChange={(e) => setValue(e.target.value)}/>
            
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    )
}