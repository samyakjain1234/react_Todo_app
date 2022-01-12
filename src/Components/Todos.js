import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {

    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }

    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">ToDo's List</h3>
            {props.Todos.length === 0 ? "No Todo to display" :
                props.Todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })

            }
        </div>
    )
}

export default Todos;