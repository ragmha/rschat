import React from 'react';

import CardItem from '../CardItem';

import './index.css';

// TODO: requires REFACTORING later.. it now renders 5 CardItem
const CardContent = () => (
  <div className="card-content">
    {[1, 2, 3, 4, 5].map(n => <CardItem key={n} />)}
  </div>
);

export default CardContent;
