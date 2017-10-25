import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Avatar = ({ src, alt }) => (
  <img className="avatar" src={src} alt="avatar" />
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Avatar;
