import React from 'react';
import { render } from 'react-dom';

import configureStore from './configureStore';

import Root from './components/Root';

const node = document.getElementById('root');
const store = configureStore();

render(<Root store={store} />, node);
