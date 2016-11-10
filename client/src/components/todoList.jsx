import React, { Component } from 'react';

const TodoList = (props) => {
  let taskArray = props.taskArray;
  if (props.showCompletedOnly) {
    taskArray = taskArray.filter((task) => {
      return task.isDone;
    });
  }

  const tasks = taskArray.map((task, index) => {
    const isDone = task.isDone ? 'isDone' : '';
    const button = task.isDone ? <button onClick={props.deleteTask.bind(null, index)}></button> : '';

    return  <div key={index}>
              <span className={isDone} onClick={props.markComplete.bind(null, index)}>{task.taskName}</span>
              {button}
            </div>
  });

  return  <div>
            {tasks}
          </div>
};

export default TodoList;
