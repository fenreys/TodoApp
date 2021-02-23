/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  state = { text: '' };

  checkChangeInText = (event) => {
    this.setState(() => ({ text: event.target.value }));
  };

  addTask = (event) => {
    event.preventDefault();
    const { text } = this.state;
    const { сreateTask } = this.props;
    if (!text) return;
    сreateTask(text, Date.now());
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form className="form" onSubmit={this.addTask}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.checkChangeInText}
          value={text}
        />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  сreateTask: PropTypes.func.isRequired,
};
