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
        <p
          style={{
            textDecoration: this.props.isComplete ? 'line-through' : 'none',
            color: this.props.isComplete ? 'red' : 'black'
          }}
        >
          {this.props.eachTodo.todo}
        </p>
        {this.props.isEditing && (
          <form>
            <input
              type="text"
              autoFocus
              required
              defaultValue={this.props.eachTodo.todo}
              placeholder={this.props.eachTodo.todo}
              ref={input => (this.textInput = input)}
            />
            <button type="submit" onClick={this.handleUpdateClick}>
              Update
            </button>
          </form>
        )}

        {!this.props.isEditing && (
          <div>
            <button onClick={this.handleEditClick}>Edit</button>
            <button onClick={this.handleClick}>Delete</button>
            <button onClick={this.handleCompleteClick}>Complete</button>
          </div>
        )}
      </div>
    );
  }
}

export default Eachtodo;
