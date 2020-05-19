import React from "react"

const TodoList = ({ todos, deleteTodo }) => {
    console.log(todos.length);
    if (todos.length > 0) {
        const todoList = todos.map(
            (todo) => {
                return (
                    <div className="collection-item" key={todo.id} >
                        <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
                    </div>
                );
            }
        )
        return (<ul className="collection">
            {todoList}
        </ul>);
    } else {
        return (
            <h4>Empty Todo List</h4>
        )
    }
}

export default TodoList;