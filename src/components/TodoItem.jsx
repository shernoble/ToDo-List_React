import React from "react";

function TodoItem(props){
    return(
        <li key={props.id}>
                        <label>
                            <input type="checkbox" checked={props.completed}
                            onChange={e => 
                                props.toggleTodo(props.id,e.target.checked)}
                                >

                                </input>
                            {props.title}
                        </label>
                        <button 
                        onClick={()=>props.deleteTodo(props.id)} 
                        className="btn btn-danger">delete</button>
                    </li>
    )
}

export default TodoItem;