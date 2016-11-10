import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions/todoActions';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';


class TodoContainer extends Component {
  constructor() {
    super();
    this.inputChange = this.inputChange.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.markComplete = this.markComplete.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  inputChange(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (e.target.value !== '') {
        e.target.value = '';
        this.props.addTaskActionCreator(this.props.todo.taskName);
      }
    } else {
      this.props.updateInputActionCreator(e.target.value);
    }
  }

  submitTask() {
    this.props.addTaskActionCreator(this.props.todo.taskName);
  }

  markComplete(index, e) {
    this.props.markCompletedActionCreator(index);
  }

  deleteTask(index, e) {
    this.props.deleteTaskActionCreator(index);
  }
  // deleteTask(e) {
  //   this.props.deleteTaskActionCreator(e.target.id);  // need to add an id attribute to each button in TodoList
  // }

  render() {
    console.log('this in render', this);
    return <div>
      <TodoHeader inputChange={this.inputChange} submitTask={this.submitTask} />
      <TodoList taskArray={this.props.todo.taskArray} deleteTask={this.deleteTask} markComplete={this.markComplete}/>
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


// move the execution add AddTodo and UpdateInput actions to the AddTodo component? (move the addTaskActionCreator to AddTodo?) => best practice?

// next feature: allow the user to change a task status to 'done' (crossed out)
// next feature: user can only remove an item if the task is done (the button only shows for completed tasks)
// next feature: sort completed tasks