import { LOGIN, LOGOUT } from '../actions';

const initalState = {
  username: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, username: action.username };
    case LOGOUT:
      return { ...state, username: null };
    default:
      return state;
  }
};
