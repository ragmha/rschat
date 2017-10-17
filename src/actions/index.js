// SOCKET
export const CONNECTING = 'CONNECTING';
export const DISCONNECTING = 'DISCONNECTING';
export const connecting = con => ({ type: CONNECTING, con });
export const disconnecting = () => ({ type: DISCONNECTING });

// AUTH
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const login = ({ username }) => ({ type: LOGIN, username });
export const logout = () => ({ type: LOGOUT });

// USER
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const addUser = ({ username }) => ({ type: ADD_USER, username });
export const removeUser = ({ username }) => ({ type: REMOVE_USER, username });

// MESSAGE
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const newMessage = ({ message }) => ({ type: NEW_MESSAGE, message });
export const sendMessage = message => ({ type: SEND_MESSAGE, message });
