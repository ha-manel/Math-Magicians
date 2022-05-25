import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { buttonClass, eventHandler, value } = this.props;
    return (<button type="button" className={buttonClass} onClick={eventHandler}>{value}</button>);
  }
}

Button.propTypes = {
  buttonClass: PropTypes.string,
  eventHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  buttonClass: '',
};

export default Button;
