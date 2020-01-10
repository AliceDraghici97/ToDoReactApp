import React, { Component } from "react";
import Todos from "./Todos";
import AddToDo from "./AddToDo";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "buy milk"
      },
      {
        id: 2,
        content: "play chess"
      }
    ]
  };

  deleteToDo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos: todos
    });
  };

  addToDo = newToDo => {
    newToDo.is = Math.random();
    let todos = [...this.state.todos, newToDo];
    this.setState({
      todos: todos
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteToDo={this.deleteToDo}></Todos>
        <AddToDo addToDo={this.addToDo}></AddToDo>
      </div>
    );
  }
}

export default App;
