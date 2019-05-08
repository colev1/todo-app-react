import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';

const propTypes = {
  completeAll: PropTypes.func,
};


const SummaryBar = ({completeAll, todos}) => {

  return (
    <div className="summary-bar">
      <p>2 tasks remaining</p>
      <Button text="Complete All" onClick={completeAll.bind(this, todos)}/>
    </div>
  )
}

SummaryBar.propTypes = propTypes;


export default SummaryBar;
