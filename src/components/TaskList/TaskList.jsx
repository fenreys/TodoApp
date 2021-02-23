import React from 'react';
import PropTypes from 'prop-types';

import './TaskList.css';

import Task from '../Task';
import EditForm from '../EditForm';

const TaskList = ({
  tasks,
  editTask,
  removeTask,
  toggleEditStatus,
  toggleDoneStatus,
}) => {
  if (!tasks.length) return <p>There is no tasks</p>;
  const tasksArr = tasks.map(({ id, done, editing, ...taskProps }) => {
    const doneStatus = done ? 'completed ' : '';
    if (editing) {
      return (
        <EditForm
          {...taskProps}
          editTask={(newDescription) => editTask(id, newDescription)}
        />
      );
    }
    return (
      <li key={id} className={doneStatus}>
        <Task
          done={done}
          {...taskProps}
          removeTask={() => removeTask(id)}
          toggleEditStatus={() => toggleEditStatus(id)}
          toggleDoneStatus={() => toggleDoneStatus(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list">{tasksArr}</ul>;
};

TaskList.defaultProps = {
  tasks: [
    {
      id: 1,
      description: `It's default from TaskList. Bruh, it's sadly`,
      done: false,
      createTime: Date.now(),
      editing: false,
    },
  ],
  editTask: () => {},
  removeTask: () => {},
  toggleEditStatus: () => {},
  toggleDoneStatus: () => {},
};
TaskList.propTypes = {
  tasks: PropTypes.instanceOf(Array),
  editTask: PropTypes.func,
  removeTask: PropTypes.func,
  toggleEditStatus: PropTypes.func,
  toggleDoneStatus: PropTypes.func,
};

export default TaskList;
