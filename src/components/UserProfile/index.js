import React from 'react';

import './index.css';

import Menu from '../Menu';
import Gallery from '../Gallery';
import CardProfile from '../Card/CardProfile';
import CardDescription from '../Card/CardDescription';
import CardContent from '../Card/CardContent';

const UserProile = () => (
  <div className="main">
    <Menu />
    <div className="main-col-1">
      <CardProfile />
      <Gallery />
    </div>
    <div className="main-col-2">
      <CardDescription />
      <CardContent />
    </div>
  </div>
);

export default UserProile;
