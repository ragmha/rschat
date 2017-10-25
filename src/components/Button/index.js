import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Button = ({ onClick, children }) => (
  <button className="button-items" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
