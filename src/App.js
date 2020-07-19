import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component{
  state = {
    todos : [
      { id : 1, content : 'Buy some orange' },
      { id : 2, content : 'Call Nadeem' },
      { id : 3, content : 'Goto the bank' },
      { id : 4, content : 'Sleep after asr'}
    ]
  }

  deleteTodo = (todo_id) => {
    console.log(todo_id)
    const todos = this.state.todos.filter((each_todo) => {
      //returns and adds this iterated todo to the new const todo array if the clicked todo is not equal to the currently iterated todo item
      return each_todo.id !== todo_id;
      //set the new state of the remianing todos after deletion
      
    });
    this.setState({
      // todos : todos
      todos
    })
  }

  addTodo = (new_todo) => {
    new_todo.id = Math.random();//assign an id to the newly added todo so that each todo items can be unique
    // use the spread operator to create a new array and inside the newly created array, we are dumping the newly added todo to it 
    let new_todos = [...this.state.todos, new_todo]; 

    //take the typed in todo and add it to the todos state
    this.setState({
      todos : new_todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
  
}

export default App;
