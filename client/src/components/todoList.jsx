import React, { Component } from 'react';

const TodoList = (props) => {
  const tasks = props.taskArray.map((task, index) => {
    const isDone = task.isDone ? 'isDone' : '';

    return  <div key={index}>
              <span className={isDone} onClick={props.markComplete.bind(null, index)}>{task.taskName}</span>
              <button onClick={props.deleteTask.bind(null, index)}></button>
            </div>
  });

  return  <div>
            {tasks}
          </div>
};

export default TodoList;
