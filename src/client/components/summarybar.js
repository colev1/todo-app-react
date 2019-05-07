import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';

const SummaryBar = () => {

  return (
    <div className="summary-bar">
      <p>2 tasks remaining</p>
      <Button text="Complete All"/>
    </div>
  )
}

export default SummaryBar;
