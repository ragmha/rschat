import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const CardForm = ({ about, email, phone, location }) => (
  <form className="cardform">
    <label className="cardform_label">About me</label>
    <textarea className="cardform_about">{about}</textarea>
    <label className="cardform_label">
      Email
      <input
        className="cardform_input"
        name="email"
        type="email"
        placeholder={email}
      />
    </label>
    <label className="cardform_label">
      Phone
      <input
        className="cardform_input"
        name="phone"
        type="tel"
        placeholder={phone}
      />
    </label>
    <label className="cardform_label">
      Location
      <input
        className="cardform_input"
        name="location"
        type="map"
        placeholder={location}
      />
    </label>
  </form>
);

CardForm.defaultProps = {
  about: 'I am a cat and I woof sometimes 😹',
  email: 'mr_meow@meowbook.com',
  phone: '+358000000',
  location: 'Helsinki, FI',
};

CardForm.propTypes = {
  about: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  location: PropTypes.string,
};

export default CardForm;
