import React, { Component } from 'react';
import AddTodo from "./todo/AddTodo";
import TodoList from "./todo/TodoList";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  //expecting an string
  add = (content) => {
    const todos = [...this.state.todos];
    const todo = { id: todos.length + 1, content };
    todos.push(todo);
    this.setState({ todos });
  }
  delete = (id) => {
    const todos = this.state.todos.filter(
      (todo) => {
        return (todo.id !== id);
      }
    )
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h4>Welcome to todo list app!</h4>
        <TodoList todos={this.state.todos} deleteTodo={this.delete} />
        <AddTodo add={this.add} />
      </div>
    );
  }
}
