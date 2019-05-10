import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Button from './button';

const noop = () => { };

/**
 * Prop Types
 * @private
 */
const propTypes = {
  archiveAllCompleted: PropTypes.func,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  archiveAllCompleted: noop,
};

/**
 * Navbar component
 * @returns {ReactElement}
 */
const Navbar = ({archiveAllCompleted, todos}) => {
  /**
   * Base CSS class
   */

  return (
    <div className="navcontainer">
      <div className = "navbar"> 
        <NavLink
          exact to="/"       
        >
          All
        </NavLink>
        <NavLink
          to="/active"
        >
          Active
        </NavLink>
        <NavLink
          to="/complete"
        >
          Completed
        </NavLink>
        <NavLink
          to="/archive"
        >
          Archived
        </NavLink>
      </div>
        <Button text= "Archive all completed" className="archive-button" onClick={archiveAllCompleted.bind(this, todos)}/>
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
