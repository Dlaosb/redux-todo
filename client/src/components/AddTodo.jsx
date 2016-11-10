import React, { Component } from 'react';

class AddTodo extends Component {
  submitClick(e) {
    e.preventDefault();
    if (this.refs.taskName.value !== '') {
      this.refs.taskName.value = '';
      this.props.submitTask();
    }
  }

  render() {
    return  <form>
              <input id="taskName" type="text" ref="taskName" onChange={this.props.inputChange} />
              <button onClick={this.submitClick.bind(this)} >Add Task</button>
            </form>
  }
};

export default AddTodo;
