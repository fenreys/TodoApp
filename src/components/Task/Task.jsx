/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

const Task = ({
  description,
  done,
  createTime,
  removeTask,
  toggleEditStatus,
  toggleDoneStatus,
}) => {
  const checkBeforeEdit = done ? () => {} : toggleEditStatus;
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        onClick={toggleDoneStatus}
        checked={done}
      />
      <label>
        <span className="description">{description}</span>
        <span className="created">
          created {formatDistanceToNow(createTime, { includeSeconds: true })}
        </span>
      </label>
      <button
        type="button"
        className="icon icon-edit"
        onClick={checkBeforeEdit}
      />
      <button
        type="button"
        className="icon icon-destroy"
        onClick={removeTask}
      />
    </div>
  );
};

Task.defaultProps = {
  description: `It's default from Task, not so sadly`,
  done: false,
  createTime: Date.now(),
  removeTask: null,
  toggleEditStatus: null,
  toggleDoneStatus: null,
};
Task.propTypes = {
  description: PropTypes.string,
  done: PropTypes.bool,
  createTime: PropTypes.number,
  removeTask: PropTypes.func,
  toggleEditStatus: PropTypes.func,
  toggleDoneStatus: PropTypes.func,
};

export default Task;
