import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';

const noop = () => {};

const propTypes = {
  completeAll: PropTypes.func,
  countCompletedTodos: PropTypes.func,
  todos: PropTypes.array
};

const defaultProps = {
  countCompletedTodos: noop,
  todos: [],
  completeAll: noop
}


const SummaryBar = ({completeAll, todos, countCompletedTodos}) => {
  // console.log(todos)
  // console.log([3,4,2].map(todo =>  todo))
  if(todos) {
    countCompletedTodos.bind(this, todos)
  }

  return (
    <div className="summary-bar">
      <p> tasks remaining</p>
      <Button text="Complete All" onClick={completeAll.bind(this, todos)}/>
    </div>
  )
}

SummaryBar.propTypes = propTypes;
SummaryBar.defaultProps = defaultProps;



export default SummaryBar;
