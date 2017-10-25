import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const MenuHeader = ({ icon, title }) => (
  <div className="menuHeader">
    <img className="menuHeader-icon" src={icon} alt="icon" />
    <div className="menuHeader-title">{title}</div>
  </div>
);

MenuHeader.defaultProps = {
  icon: 'https://d30y9cdsu7xlg0.cloudfront.net/png/43388-200.png',
  title: 'meowBook',
};

MenuHeader.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuHeader;
