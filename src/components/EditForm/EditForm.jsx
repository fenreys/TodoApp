/* eslint-disable jsx-a11y/no-autofocus */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './EditForm.css';

export default class EditForm extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    text: this.props.description,
  };

  checkChangeInText = (event) => {
    this.setState(() => ({ text: event.target.value }));
  };

  editTask = (event) => {
    event.preventDefault();
    const { text } = this.state;
    const { editTask } = this.props;
    if (!text) return;
    editTask(text);
  };

  render() {
    const { text } = this.state;
    return (
      <form className="edit-form" onSubmit={this.editTask}>
        <input
          className="edit"
          type="text"
          autoFocus
          onChange={this.checkChangeInText}
          value={text}
        />
      </form>
    );
  }
}

EditForm.defaultProps = {
  description: 'Edit Form',
  editTask: () => {},
};

EditForm.propTypes = {
  description: PropTypes.string,
  editTask: PropTypes.func,
};
