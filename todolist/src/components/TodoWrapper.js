import React from 'react';
import { TodoForm } from './TodoForm';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () =>{
    return (
        <div className='TodoWrapper'>
            <TodoForm/>
            <EditTodoForm/>
        </div>
    )

}