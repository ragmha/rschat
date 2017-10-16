import { ADD_USER, REMOVE_USER } from '../actions';

const initalState = {};

export default (state = initalState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, [action.username]: true };
    case REMOVE_USER:
      const newState = { ...state };
      delete newState[action.username];
      return newState;
    default:
      return state;
  }
};
