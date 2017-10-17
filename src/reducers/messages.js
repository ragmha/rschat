import { NEW_MESSAGE } from '../actions';

const initalState = {
  list: [0, 1, 2, 3, 4, 5],
  entities: {
    0: { id: 0, text: 'aaa', username: 'a' },
    1: { id: 1, text: 'woot', username: 'a' },
    2: { id: 2, text: 'no way', username: 'a' },
    3: { id: 3, text: 'aaaa', username: 'b' },
    4: { id: 4, text: 'dssaa', username: 'b' },
    5: { id: 5, text: 'plain jane', username: 'b' },
  },
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
