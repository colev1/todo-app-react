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
  filterBy: PropTypes.string,
  onClickFilter: PropTypes.func,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filterBy: '',
  onClickFilter: noop,
};

/**
 * Navbar component
 * @returns {ReactElement}
 */
const Navbar = () => {
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
        <Button text= "Archive all completed" className="archive-button"/>
    </div>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
