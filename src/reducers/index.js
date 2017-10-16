import { combineReducers } from 'redux';

import appReducer from './app';
import usersReducer from './users';
import messagesReducer from './messages';

const rootReducer = combineReducers({
  appReducer,
  usersReducer,
  messagesReducer,
});

export default rootReducer;
