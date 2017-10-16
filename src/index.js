import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

import Root from './components/Root';

const node = document.getElementById('root');
const store = configureStore();

ReactDOM.render(<Root store={store} />, node);
registerServiceWorker();
