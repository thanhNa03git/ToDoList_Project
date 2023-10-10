import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([
        ...todos,
        { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        console.log("show todo:", todos);
    };

    const convertComplete = (id) => {
        setTodos(
        todos.map((todo) =>
            todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
                }
            : todo
        )
        );
        console.log("convert complete", setTodos);
    };

    const deleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        console.log("deleted: ",setTodos);
    };

    const editTask = (id) => {
        setTodos(
        todos.map((todo) =>
            todo.id === id
            ? {
                ...todo,
                isEditing: !todo.isEditing,
                }
            : todo
        )
        );
        console.log("show form edit task: ", setTodos)
    };
    // change task done
    const updateTask = (task, id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                ? {
                    ...todo, task,
                    isEditing: !todo.isEditing,
                    }
                : todo
            )
        );
        console.log("done change task: ", setTodos);
    }
    return (
        <div className="TodoWrapper">
        <TodoForm addTodo={addTodo} />

        {todos.map((todo, index) =>
            todo.isEditing 
            ? (<EditTodoForm editTask={updateTask} task={todo}/>) 
            : (
            <Todo
                task={todo}
                key={index}
                convertComplete={convertComplete}
                deleteTask={deleteTask}
                editTask={editTask}
            />
            )
        )}
        </div>
    );
};
