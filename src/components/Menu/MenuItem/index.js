import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const MenuItem = ({ index, items }) => (
  <div className="menu-item" key={index}>
    {item}
  </div>
);

MenuItem.propTypes = {
  items: PropTypes.array.isRequired,
};

export default MenuItem;
