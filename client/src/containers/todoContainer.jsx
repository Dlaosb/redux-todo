import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActionCreators from '../actions/todoActions';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';


class TodoContainer extends Component {
  constructor() {
    super();
    this.keydown = this.keydown.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.submit = this.submit.bind(this);
  }

  keydown(e) {
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

  submit(e) {
    
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
      <TodoHeader keydown={this.keydown} submit={this.submit} />
      <TodoList taskArray={this.props.todo.taskArray} deleteTask={this.deleteTask} />
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


// next feature: add a submit button to add a task
// next feature: allow the user to change a task status to 'done' (crossed out)
// next feature: user can only remove an item if the task is done (the button only shows for completed tasks)
