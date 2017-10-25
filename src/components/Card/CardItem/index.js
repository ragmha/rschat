import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const CardItem = ({ icon, name, value }) => (
  <div className="card-item">
    <img className="card-item_image" src={icon} alt={`icon-${icon}`} />
    <div className="card-item_title">{name}</div>
    <div className="card-item_value">{value}</div>
  </div>
);

CardItem.defaultProps = {
  icon:
    'https://mir-s3-cdn-cf.behance.net/project_modules/disp/f8c9e130344325.56e67b8f87928.gif',
  name: 'POWER',
  value: '9999',
};

CardItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default CardItem;
