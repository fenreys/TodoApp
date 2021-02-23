import React from 'react';
import PropTypes from 'prop-types';

import './Footer.css';

import TasksFilter from '../TasksFilter';

const Footer = ({
  countLeftTasks,
  filterStatus,
  filterTasks,
  clearCompletedTasks,
}) => {
  const checkcountLeftTasks = countLeftTasks
    ? `${countLeftTasks} tasks left`
    : 'No tasks to complete!';
  return (
    <footer className="footer">
      <span className="todo-count">{checkcountLeftTasks}</span>
      <TasksFilter filterTasks={filterTasks} filterStatus={filterStatus} />
      <button
        type="button"
        className="clear-completed"
        onClick={clearCompletedTasks}
      >
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  countLeftTasks: -0,
  filterStatus: 'All',
  filterTasks: () => {},
  clearCompletedTasks: () => {},
};
Footer.propTypes = {
  countLeftTasks: PropTypes.number,
  filterStatus: PropTypes.string,
  filterTasks: PropTypes.func,
  clearCompletedTasks: PropTypes.func,
};

export default Footer;
