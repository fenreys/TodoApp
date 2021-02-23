import React from 'react';
import PropTypes from 'prop-types';

import './TasksFilter.css';

import {
  filterValues,
  isAll,
  isActive,
  isCompleted,
} from './TasksFilterConstants';

const TasksFilter = ({ filterTasks, filterStatus }) => (
  <ul className="filters">
    <li>
      <button
        type="button"
        className={isAll(filterStatus)}
        onClick={() => filterTasks(filterValues.all)}
      >
        All
      </button>
    </li>
    <li>
      <button
        type="button"
        className={isActive(filterStatus)}
        onClick={() => filterTasks(filterValues.active)}
      >
        Active
      </button>
    </li>
    <li>
      <button
        type="button"
        className={isCompleted(filterStatus)}
        onClick={() => filterTasks(filterValues.completed)}
      >
        Completed
      </button>
    </li>
  </ul>
);

TasksFilter.defaultProps = {
  filterTasks: () => {},
  filterStatus: 'All',
};
TasksFilter.propTypes = {
  filterTasks: PropTypes.func,
  filterStatus: PropTypes.string,
};

export default TasksFilter;
