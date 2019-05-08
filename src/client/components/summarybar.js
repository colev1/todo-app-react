import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';

const noop = () => {};

const propTypes = {
  completeAll: PropTypes.func,
  todos: PropTypes.array
};

const defaultProps = {
  todos: [],
  completeAll: noop
}


const SummaryBar = ({completeAll, todos, remaining}) => {
  return (
    <div className="summary-bar">
      <p> {remaining} tasks remaining</p>
      <Button text="Complete All" onClick={completeAll.bind(this, todos)}/>
    </div>
  )
}

SummaryBar.propTypes = propTypes;
SummaryBar.defaultProps = defaultProps;



export default SummaryBar;
