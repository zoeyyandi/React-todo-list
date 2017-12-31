import React, { Component } from 'react';

class Eachtodo extends Component {
  handleClick = event => {
    this.props.deleteTodo(this.props.id);
  };
  handleEditClick = event => {
    this.props.editing(this.props.id);
  };
  handleCompleteClick = event => {
    event.preventDefault();
    this.props.isCompleted(this.props.id);
  };
  handleUpdateClick = event => {
    event.preventDefault();
    const updatedTodo = this.textInput.value;
    this.props.updateTodo(this.props.id, updatedTodo);
  };

  render() {
    return (
      <div className="eachTodo">
        {!this.props.isEditing && (
          <p
            className="task"
            style={{
              textDecoration: this.props.isComplete ? 'line-through' : 'none',
              color: this.props.isComplete ? 'red' : 'black'
            }}
          >
            {this.props.eachTodo.todo}
          </p>
        )}
        {this.props.isEditing && (
          <form id="editForm" className="form">
            <input
              className="inputBox"
              id="editTask"
              type="text"
              autoFocus
              required
              defaultValue={this.props.eachTodo.todo}
              placeholder={this.props.eachTodo.todo}
              ref={input => (this.textInput = input)}
            />
            <button
              className="button"
              type="submit"
              onClick={this.handleUpdateClick}
            >
              <i class="fa fa-pencil-square-o" aria-hidden="true" />
            </button>
          </form>
        )}

        {!this.props.isEditing && (
          <div className="rightButtons">
            <button className="button" onClick={this.handleEditClick}>
              <i className="fa fa-pencil" aria-hidden="true" />
            </button>
            <button className="button" onClick={this.handleClick}>
              <i className="fa fa-trash" aria-hidden="true" />
            </button>
            <button className="button" onClick={this.handleCompleteClick}>
              <i className="fa fa-check" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Eachtodo;
