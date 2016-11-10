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
    this.toggleCompletedView = this.toggleCompletedView.bind(this);
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

  toggleCompletedView(e) {
    this.props.showCompletedOnlyActionCreator();
  }

  render() {
    return <div>
      <TodoHeader inputChange={this.inputChange} submitTask={this.submitTask} toggleCompletedView={this.toggleCompletedView} />
      <TodoList taskArray={this.props.todo.taskArray} deleteTask={this.deleteTask} markComplete={this.markComplete} showCompletedOnly={this.props.todo.showCompletedOnly}/>
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
