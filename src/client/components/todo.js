import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';
import TodoLink from './todo-link';

const noop = () => { };

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
  archive: PropTypes.bool
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
  archive: false
};

/**
 * Todo component
 * @returns {ReactElement}
 */
const Todo = ({ filtered, onClickDelete, onClickTodo, onClickArchive, status, text, archive }) => {
  /**
   * Base CSS class
   */
  const todoCls = filtered ? 'todo' : 'todo hidden';
  const completeCls = status === 'complete' ? ' --status-complete' : '';

  return (
    <li className={todoCls + completeCls}>
      <div className="checkbox-container">
        <input type="checkbox" checked={status === 'complete'} onClick={onClickTodo} onChange={onClickTodo} className="checkbox" />
        <span class="checkmark"></span>
      </div>
      <TodoLink text={text} onClick={onClickTodo} />
      <Button text='Archive' onClick={onClickArchive} status={status} archive={archive} />
      <Button text="X" onClick={onClickDelete} />
    </li>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
