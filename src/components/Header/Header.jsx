import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';

import NewTaskForm from '../NewTaskForm';

const Header = ({ сreateTask }) => (
  <header className="header">
    <h1>My Todo List</h1>
    <NewTaskForm сreateTask={сreateTask} />
  </header>
);

Header.defaultProps = {
  сreateTask: () => {},
};
Header.propTypes = {
  сreateTask: PropTypes.func,
};

export default Header;
