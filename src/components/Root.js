import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserProfile from '../components/UserProfile';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/userProfile" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
