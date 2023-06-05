import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props){

    function toggleTodo(id,completed){

        props.setTodos(currTodos => {
        return currTodos.map(todo =>{
            if(todo.id===id){
                console.log(todo);
                // todo.completed=completed -> mutating state, but states are immutable so this will not work, we just need to create a brand new state object
                return {...todo, completed};
            }
            return todo;
        })
        })
    }

    function deleteTodos(id){
        props.setTodos(curr =>{
            return curr.filter(todo=> todo.id!==id);
        })
    }

    return(
        <div>
            <h1>TODO LIST</h1>
            <div>
                <ul>
                {props.todos.length === 0 && "NO TODOS"}
                {props.todos.map (todo=>{
                    return(
                        <TodoItem
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodos}
                        />
                    )
                })}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
