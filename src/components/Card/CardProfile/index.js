import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

import Avatar from '../../Avatar';

const CardProfile = ({ img, header }) => (
  <div className="cardProfile">
    <Avatar className="avatar" src={img} />
    <div className="cardProfile-header">{header}</div>
  </div>
);

CardProfile.defaultProps = {
  img:
    'https://orig00.deviantart.net/f37a/f/2014/262/e/a/cat_snarl_animation_by_warriorluvr127-d7zsimv.gif',
  header: 'Mr. Meow',
};

CardProfile.propTypes = {
  img: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};
export default CardProfile;
