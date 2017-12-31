import React, { Component } from 'react';
import Eachtodo from './Eachtodo.js';

class Todolist extends Component {
  handleAll = event => {
    this.props.showAll();
  };

  handleActive = event => {
    this.props.showActive();
  };

  handleCompleted = event => {
    this.props.showCompleted();
  };

  render() {
    return (
      <div className="todoList">
        <div className="tab">
          <button className="tabs" onClick={this.handleAll}>
            All
          </button>
          <button className="tabs" onClick={this.handleActive}>
            Active
          </button>
          <button className="tabs" onClick={this.handleCompleted}>
            Completed
          </button>
        </div>
        {this.props.isActive &&
          this.props.todoList
            .filter(todo => !todo.isComplete)
            .map((todo, index) => (
              <Eachtodo
                id={todo.id}
                key={index}
                eachTodo={todo}
                deleteTodo={this.props.deleteTodo}
                editing={this.props.editing}
                isEditing={todo.isEditing}
                isCompleted={this.props.isCompleted}
                isComplete={todo.isComplete}
                updateTodo={this.props.updateTodo}
              />
            ))}
        {this.props.isAll &&
          this.props.todoList.map((todo, index) => (
            <Eachtodo
              id={todo.id}
              key={index}
              eachTodo={todo}
              deleteTodo={this.props.deleteTodo}
              editing={this.props.editing}
              isEditing={todo.isEditing}
              isCompleted={this.props.isCompleted}
              isComplete={todo.isComplete}
              updateTodo={this.props.updateTodo}
            />
          ))}
        {this.props.isComplete &&
          this.props.todoList
            .filter(todo => todo.isComplete)
            .map((todo, index) => (
              <Eachtodo
                id={todo.id}
                key={index}
                eachTodo={todo}
                deleteTodo={this.props.deleteTodo}
                editing={this.props.editing}
                isEditing={todo.isEditing}
                isCompleted={this.props.isCompleted}
                isComplete={todo.isComplete}
                updateTodo={this.props.updateTodo}
              />
            ))}
      </div>
    );
  }
}

export default Todolist;
