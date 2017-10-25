import React from 'react';
import CardForm from '../CardForm';

import './index.css';
const CardDescription = ({ about, email, phone, location }) => (
  <div className="card-description">
    <h1 className="card-description_header">Info</h1>
    <CardForm />
  </div>
);

export default CardDescription;
