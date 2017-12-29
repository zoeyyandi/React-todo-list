import React, { Component } from 'react';

class Input extends Component {
  handleClick = event => {
    event.preventDefault();
    const todo = this.textInput.value;
    this.props.addTodo(todo);
    this.textInput.value = null;
  };

  render() {
    return (
      <div className="inputTodo">
        <form>
          <input
            ref={input => (this.textInput = input)}
            type="text"
            required
            placeholder="What do you need to do?"
          />
          <button onClick={this.handleClick} type="submit">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
