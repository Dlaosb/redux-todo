import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions/todoActions';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

class TodoContainer extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.keydown = this.keydown.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.markTask = this.markTask.bind(this);
  }

  handleInput(e) {
    this.props.updateInputActionCreator(e.target.value);
  }

  addTask(e) {
    e.preventDefault();

    if (this.props.todo.taskName !== '') {
      document.getElementById('taskName').value = '';
      this.props.addTaskActionCreator(this.props.todo.taskName);
    }
  }

  keydown(e) {
   // console.log('keydown');
    // e.target.value = '';
  }

  markTask(index, e) {
    //e.preventDefault(); Don't need to prevent default all the time
   e.target.className = e.target.className === 'done' ? '' : 'done';
  }

  deleteTask(index, e) {
    this.props.deleteTaskActionCreator(index);
  }
  // deleteTask(e) {
  //   this.props.deleteTaskActionCreator(e.target.id);  // need to add an id attribute to each button in TodoList
  // }

  render() {
   // console.log('this in render', this);
    return <div>
      <TodoHeader handleInput={this.handleInput} addTask={this.addTask} keydown={this.keydown} />
      <TodoList markTask={this.markTask} taskArray={this.props.todo.taskArray} deleteTask={this.deleteTask} />

    </div>
  }
}

const mapStateToProps = (state) => {
  return { todo: state.todo };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(todoActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);


// modify input event handlers to use onKeyDown; keydown checks key='Enter' and calls methods to call the actionCreators
// proper way to clear the input box? either access the DOM element by id, or use e.target.value on a keydown event
// line 46 -> proper way to pass down pieces of state (taskArray)?
// line 27 -> proper way to pass the taskName? (use the state value or grab the value of the input DOM element)
// modify todoReducers to use object destructuring instead of Object.assign, and use a single line of code for return statements; best practice?
