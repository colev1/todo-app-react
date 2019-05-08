import { Link } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';

import { api, getApiPromise } from '../helpers/api';
import Button from './button';
import Navbar from './navbar';
import TodoForm from './todo-form';
import TodoLink from './todo-link';
import Todos from './todos';
import SummaryBar from './summarybar';

/**
 * TodosPage component
 * @class
 */
class TodosPage extends React.Component {
  /**
   * Base CSS class
   * @static
   */
  static baseCls = 'todos-page'

  /**
   * Prop types
   * @static
   */
  static propTypes = {
    params: PropTypes.object,
  };

  /**
   * Constructor
   * @constructor
   *
   * @param  {object} props - Props
   */
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filterBy: null,
      remaining: 0
    };

    this.addTodo = this.addTodo.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.setFilterBy = this.setFilterBy.bind(this);
    this.updateTodos = this.updateTodos.bind(this);
    this.completeAll = this.completeAll.bind(this);
    this.countCompletedTodos = this.countCompletedTodos.bind(this)
    this.putTodo = this.putTodo.bind(this)
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    api('GET', null, this.updateTodos);
    this.countCompletedTodos()
  }

  /**
   * Add todo
   *
   * @param  {string} text - Todo text
   */
  addTodo(text) {
    if (!text) {
      return;
    }
    api('POST', { text }, this.postTodo);
  }

  /**
   * Posts new todo to the todos collection
   *
   * @param  {object} json - Resulting JSON from fetch
   */
  postTodo(json) {
    this.setState({
      todos: [...json],
    });
    this.countCompletedTodos()
  }

  /**
   * Set filterBy state
   *
   * @param {string} filterBy - filterBy state
   */
  setFilterBy(filterBy) {
    this.setState({ filterBy });
  }

  /**
   * Update todos array state
   *
   * @param  {Array} todos - Array of todo objects
   */
  updateTodos(todos) {
    this.setState({ todos });
    this.countCompletedTodos()
  }

  completeAll(todos) {
    todos.forEach((todo => {
      todo.status = "complete";
      const newTodo = Object.assign({}, todo);
      newTodo.status = 'complete';
      newTodo.archive = false;
      api('PUT', newTodo, this.putTodo);
    }))
    this.setState({ todos })
    
    this.countCompletedTodos();

  }

  putTodo = json => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => {
      return todo.id === json.id;
    });

    this.updateTodos(
      [
        ...todos.slice(0, index),
        json,
        ...todos.slice(index + 1),
      ]
    );
  }

  countCompletedTodos() {
    let remaining = 0;
    for (var i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].status !== "complete") {
        remaining++
      }
    }
    this.setState({ remaining })
  }

  /**
   * Render
   * @returns {ReactElement}
   */
  render() {

    return (
      <div className={this.baseCls}>
        <Navbar filterBy={this.state.filterBy} onClickFilter={this.setFilterBy} />

        <SummaryBar
          completeAll={this.completeAll}
          todos={this.state.todos}
          remaining={this.state.remaining}
        />

        <TodoForm onSubmit={this.addTodo} />

        <Todos
          filterBy={this.state.filterBy}
          todos={this.state.todos}
          updateTodos={this.updateTodos}
          countCompletedTodos={this.countCompletedTodos}
        />
      </div>
    );
  }
}

export default TodosPage;
