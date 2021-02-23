import React from 'react';
import PropTypes from 'prop-types';

import './Main.css';

import TaskList from '../TaskList';

const Main = ({
  tasks,
  editTask,
  removeTask,
  toggleEditStatus,
  toggleDoneStatus,
}) => (
  <section className="main">
    <TaskList
      tasks={tasks}
      editTask={editTask}
      removeTask={removeTask}
      toggleEditStatus={toggleEditStatus}
      toggleDoneStatus={toggleDoneStatus}
    />
  </section>
);

Main.defaultProps = {
  tasks: [
    {
      id: 1,
      description: `It's default from Main. Bruh, it's sadly`,
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
Main.propTypes = {
  tasks: PropTypes.instanceOf(Array),
  editTask: PropTypes.func,
  removeTask: PropTypes.func,
  toggleEditStatus: PropTypes.func,
  toggleDoneStatus: PropTypes.func,
};

export default Main;
