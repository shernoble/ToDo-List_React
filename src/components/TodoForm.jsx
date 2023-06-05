import React from "react";

function TodoForm(props){
    const[newItem,setnewItem]=React.useState("");


    function handleSubmit(e){
        
        e.preventDefault();//prevents page from refreshing
        // const value=e.value;
        props.setTodos(prev =>{
            return[
                ...prev,
                {id:crypto.randomUUID(),title:newItem,completed:false},
            ]
        })
        setnewItem("");
    }

    return(
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" name="item" id="item" value={newItem} onChange={e => setnewItem(e.target.value)}/>
            </div>
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;