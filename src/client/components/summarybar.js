import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';

const noop = () => { };

const propTypes = {
  completeAll: PropTypes.func,
  todos: PropTypes.array
};

const defaultProps = {
  todos: [],
  completeAll: noop
}


const SummaryBar = ({ completeAll, todos, remaining }) => {
  let message;
  switch (remaining) {
    case 0:
      message = 'You dont have any tasks remaining'
      break;
    case 1:
      message = '1 task remaining'
      break;
    default:
      message = `${remaining} tasks remaining`
  }

  return (
    <div className="summary-bar">
      <p className="message"> {message} </p>
      <Button text="Complete All" onClick={completeAll.bind(this, todos)} remaining={remaining} />
    </div>
  )
}

SummaryBar.propTypes = propTypes;
SummaryBar.defaultProps = defaultProps;



export default SummaryBar;
