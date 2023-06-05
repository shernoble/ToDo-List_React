import React, { useEffect } from "react";
import "../styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App(){
    // setnewItem("dsgg")->this function is used to set a new value for newItem:function on call rerenders the whole page
    const[todos,setTodos]=React.useState(() =>{
        const localValue=localStorage.getItem("ITEMS");
        if(localValue==null) return [];
        return JSON.parse(localValue);
    });

    // hooks always hsouldbe on top of the file
    // cannot render them conditionally
    
    
    // store in local storage
    useEffect(() => {
        localStorage.setItem("ITEMS",JSON.stringify(todos))
    },[todos]);
    

    return(<>
        
        <TodoForm 
            setTodos={setTodos}
        />
        <TodoList 
            setTodos={setTodos}
            todos={todos}
        />
        
    </>);
}

export default App;