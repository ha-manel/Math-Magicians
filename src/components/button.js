import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonClass, eventHandler, value } = props;
  return (<button type="button" className={buttonClass} onClick={eventHandler}>{value}</button>);
};

Button.propTypes = {
  buttonClass: PropTypes.string,
  eventHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonClass: '',
};

export default Button;
