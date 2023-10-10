import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faTrash}  from '@fortawesome/free-solid-svg-icons'
import{faPenToSquare}  from '@fortawesome/free-solid-svg-icons'


export const Todo = ({task, convertComplete, deleteTask, editTask}) => {
    return(
        <div className='Todo'>
            <p onClick={() => convertComplete(task.id)} 
                className={`${task.completed ? 'completed': ''}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} className='edit-icon'
                    onClick={() => editTask(task.id)}/>
                <FontAwesomeIcon icon={faTrash} className='delete-icon'
                    onClick={() => deleteTask(task.id)}/>
            </div>
        </div>
    )
}