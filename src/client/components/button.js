import PropTypes from 'prop-types';
import React from 'react';

const noop = () => { };

/**
 * Prop Types
 * @private
 */
const propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  archive: PropTypes.bool,
  status: PropTypes.string
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  onClick: noop,
  text: '',
  archive: null,
  status: ''
};

/**
 * Button component
 * @returns {ReactElement}
 */
const Button = ({ text, onClick, archive, status }) => {
  /**
   * Base CSS class
   */
  let buttonClass;
  switch(text) {
   case 'Archive': 
    if (archive || status === "active") {
      buttonClass = 'hidden';
    } else {
      buttonClass = 'archive-btn';
    }
    break;
  case 'X':
    buttonClass = 'x-btn'
  break;
  default:
    buttonClass = 'button';
}

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  )
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
