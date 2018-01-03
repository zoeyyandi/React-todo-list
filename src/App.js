import React, { Component } from 'react';
import Titlebar from './Titlebar.js';
import Todolist from './Todolist.js';
import Input from './Input.js';
import Hole from './Hole.js';
import localforage from 'localforage';

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
      isAll: true,
      arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }

  addTodo = todo => {
    const newTodoList = [
      { id: uuidv4(), todo, isComplete: false, isEditing: false },
      ...this.state.todoList
    ];

    localforage
      .setItem('todoList', newTodoList)
      .then(() => {
        this.setState({
          todoList: newTodoList
        });
      })
      .catch(err => console.log(err));
  };

  deleteTodo = id => {
    const newTodoList = this.state.todoList.filter(todo => todo.id !== id);
    localforage
      .setItem('todoList', newTodoList)
      .then(() => {
        this.setState({
          todoList: newTodoList
        });
      })
      .catch(err => {
        console.log(err);
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
    localforage
      .setItem('todoList', newTodoList)
      .then(() => {
        this.setState({
          todoList: newTodoList
        });
      })
      .catch(err => console.log(err));
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

  componentWillMount() {
    localforage
      .getItem('todoList')
      .then(value => {
        if (value) {
          this.setState({
            todoList: value,
            isActive: false,
            isComplete: false,
            isAll: true,
            arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="appContainer">
        <div className="verticalLine" />
        <div className="holes">
          {this.state &&
            this.state.arr.map((item, index) => <Hole key={index} />)}
        </div>
        <div className="bottom">
          <div className="rightNotepad">
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
        </div>
      </div>
    );
  }
}

export default App;
