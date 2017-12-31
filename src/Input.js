import React, { Component } from 'react';

class Input extends Component {
  handleClick = event => {
    event.preventDefault();
    const todo = this.textInput.value;
    this.props.addTodo(todo);
    this.textInput.value = null;
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const todo = this.textInput.value;
      this.props.addTodo(todo);
      this.textInput.value = null;
    }
  };

  render() {
    return (
      <div className="inputTodo">
        <form className="form">
          <input
            className="inputBox"
            onKeyPress={this.handleKeyPress}
            autoFocus
            ref={input => (this.textInput = input)}
            type="text"
            required
            placeholder=" What do you need to do?"
          />
          <button className="button" onClick={this.handleClick} type="submit">
            <i class="fa fa-plus" aria-hidden="true" />
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
