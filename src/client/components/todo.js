import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';
import TodoLink from './todo-link';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filtered: PropTypes.bool,
  onClickDelete: PropTypes.func,
  onClickTodo: PropTypes.func,
  onClickArchive: PropTypes.func,
  status: PropTypes.string,
  text: PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filtered: false,
  onClickDelete: noop,
  onClickTodo: noop,
  onClickArchive: noop,
  status: '',
  text: '',
};

/**
 * Todo component
 * @returns {ReactElement}
 */
const Todo = ({ filtered, onClickDelete, onClickTodo, onClickArchive, status, text }) => {
  /**
   * Base CSS class
   */
  const todoCls = filtered ? 'todo' : 'todo hidden';
  + (status === 'complete' ? ' todo--status-complete' : '')

  if(status === '') {
    return (
      <li className={todoCls}>
        <TodoLink text={text} onClick={onClickTodo} />
        <Button text='Archive' onClick={onClickArchive} status={todo.status}/>

        <Button text="Delete" onClick={onClickDelete} />
      </li>
    );
  } else {
    return (
      <li className={todoCls}>
        <TodoLink text={text} onClick={onClickTodo} />
        <Button text="Delete" onClick={onClickDelete} />
      </li>
    );
  }
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
