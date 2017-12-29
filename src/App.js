import React, { Component } from 'react';
import Titlebar from './Titlebar.js';
import Todolist from './Todolist.js';
import Input from './Input.js';

const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: uuidv4(),
          todo: 'Wash dishes',
          isComplete: false,
          isEditing: false
        },
        {
          id: uuidv4(),
          todo: 'Grocery shopping',
          isComplete: false,
          isEditing: false
        },
        {
          id: uuidv4(),
          todo: 'Walk the dog',
          isComplete: false,
          isEditing: false
        }
      ],
      isActive: false,
      isComplete: false,
      isAll: true
    };
  }

  addTodo = todo => {
    const newState = {
      todoList: [
        { id: uuidv4(), todo, isComplete: false, isEditing: false },
        ...this.state.todoList
      ]
    };
    this.setState(newState);
  };

  deleteTodo = id => {
    const newTodoList = this.state.todoList.filter(todo => todo.id !== id);
    this.setState({
      todoList: newTodoList
    });
  };

  editing = id => {
    const newTodoList = this.state.todoList.map(
      todo =>
        todo.id === id
          ? Object.assign({}, todo, { isEditing: !todo.isEditing })
          : todo
    );
    this.setState({
      todoList: newTodoList
    });
  };

  isCompleted = id => {
    const newTodoList = this.state.todoList.map(
      todo =>
        todo.id === id
          ? Object.assign({}, todo, { isComplete: !todo.isComplete })
          : todo
    );
    this.setState({
      todoList: newTodoList
    });
  };

  updateTodo = (id, updatedTodo) => {
    const newTodoList = this.state.todoList.map(
      todo =>
        todo.id === id
          ? Object.assign(
              {},
              todo,
              { todo: updatedTodo },
              { isEditing: !todo.isEditing }
            )
          : todo
    );
    this.setState({
      todoList: newTodoList
    });
  };

  showActive = () => {
    const newState = {
      ...this.state,
      isActive: true,
      isComplete: false,
      isAll: false
    };
    this.setState(newState);
  };

  showCompleted = () => {
    const newState = {
      ...this.state,
      isActive: false,
      isComplete: true,
      isAll: false
    };
    this.setState(newState);
  };

  showAll = () => {
    const newState = {
      ...this.state,
      isActive: false,
      isAll: true,
      isComplete: false
    };
    this.setState(newState);
  };

  render() {
    console.log(this.state);
    return (
      <div className="appContainer">
        <Titlebar />
        <Input addTodo={this.addTodo} />
        <Todolist
          deleteTodo={this.deleteTodo}
          editing={this.editing}
          todoList={this.state.todoList}
          isActive={this.state.isActive}
          isComplete={this.state.isComplete}
          isAll={this.state.isAll}
          isCompleted={this.isCompleted}
          updateTodo={this.updateTodo}
          showActive={this.showActive}
          showCompleted={this.showCompleted}
          showAll={this.showAll}
        />
      </div>
    );
  }
}

export default App;
