import { combineReducers } from 'redux';

import app from './app';
import users from './users';
import messages from './messages';

const rootReducer = combineReducers({
  app,
  users,
  messages,
});

export default rootReducer;
