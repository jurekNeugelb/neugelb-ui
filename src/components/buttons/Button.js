import React, { Component, PropTypes } from 'react';

/**
 * The is the standard button of the Commerzbank
 */
class Button extends Component {

  render() {
    return (
      <input type="button" className="button-primary">{children}</input>
    );
  }

};

Button.defaultProps = {

};

Button.propTypes = {
  /**
   * The label of the button, will be used instead of a children.
   */
  label: PropTypes.string,
  /**
   * The children of the button, will be used instead of a label.
   */
  children: PropTypes.node
};

export default Button;
