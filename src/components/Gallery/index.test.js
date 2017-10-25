import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './index';

it('renders Gallery component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Gallery />, div);
});
