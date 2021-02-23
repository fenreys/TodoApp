import React, { Component } from 'react';

import './TodoApp.css';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

export default class TodoApp extends Component {
  forId = 0;

  state = {
    tasks: Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    ),
    filterStatus: 'All',
  };

  сreateTask = (text, ms) => {
    const createElemetForTask = (description, createTime) => {
      this.forId += 1;
      return {
        id: this.forId,
        description,
        done: false,
        createTime,
        editing: false,
      };
    };
    this.setState(({ tasks }) => ({
      tasks: [...tasks, createElemetForTask(text, ms)],
    }));
  };

  editTask = (id, text) => {
    this.setState(({ tasks }) => {
      const i = tasks.findIndex((el) => el.id === id);
      return {
        tasks: [
          ...tasks.slice(0, i),
          { ...tasks[i], description: text, editing: !tasks[i].editing },
          ...tasks.slice(i + 1),
        ],
      };
    });
  };

  removeTask = (id) => {
    this.setState(({ tasks }) => {
      const i = tasks.findIndex((el) => el.id === id);
      localStorage.removeItem(id);
      return { tasks: [...tasks.slice(0, i), ...tasks.slice(i + 1)] };
    });
  };

  toggleEditStatus = (id) => {
    this.setState(({ tasks }) => {
      const i = tasks.findIndex((el) => el.id === id);
      return {
        tasks: [
          ...tasks.slice(0, i),
          { ...tasks[i], editing: !tasks[i].editing },
          ...tasks.slice(i + 1),
        ],
      };
    });
  };

  toggleDoneStatus = (id) => {
    this.setState(({ tasks }) => {
      const i = tasks.findIndex((el) => el.id === id);
      return {
        tasks: [
          ...tasks.slice(0, i),
          { ...tasks[i], done: !tasks[i].done },
          ...tasks.slice(i + 1),
        ],
      };
    });
  };

  filterTasks = (newStatus) => {
    this.setState(() => ({
      filterStatus: newStatus,
    }));
  };

  clearCompletedTasks = () => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((task) => !task.done),
    }));
  };

  render() {
    const { tasks, filterStatus } = this.state;
    for (const task of tasks) {
      localStorage.setItem(task.id, JSON.stringify(task));
    } // savin tasks in local store
    const filteredTasks = tasks.filter(
      ({ done }) =>
        filterStatus === 'All' ||
        (filterStatus === 'Active' && !done) ||
        (filterStatus === 'Completed' && done)
    );
    const countLeftTasks = tasks.filter((task) => !task.done).length;
    return (
      <section className="todoapp">
        <Header сreateTask={this.сreateTask} />
        <Main
          tasks={filteredTasks}
          editTask={this.editTask}
          removeTask={this.removeTask}
          toggleEditStatus={this.toggleEditStatus}
          toggleDoneStatus={this.toggleDoneStatus}
        />
        <Footer
          countLeftTasks={countLeftTasks}
          filterStatus={filterStatus}
          filterTasks={this.filterTasks}
          clearCompletedTasks={this.clearCompletedTasks}
        />
      </section>
    );
  }
}
