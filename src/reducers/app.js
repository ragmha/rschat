import { CONNECTING, LOGIN, LOGOUT } from '../actions';

const initalState = {
  username: null,
  connecting: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case CONNECTING:
      return { ...state, connecting: action.connecting };
    case LOGIN:
      return { ...state, username: action.username };
    case LOGOUT:
      return { ...state, username: null };
    default:
      return state;
  }
};
