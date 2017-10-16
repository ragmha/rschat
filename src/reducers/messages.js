import { NEW_MESSAGE } from '../actions';

const initalState = {
  list: [],
  entities: {},
};

export default (state = initalState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      const { message } = action;
      return {
        ...state,
        list: [...state.list, message.id],
        entities: {
          ...state.entities,
          [message.id]: message,
        },
      };
    default:
      return state;
  }
};
