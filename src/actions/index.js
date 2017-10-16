// AUTH
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const login = login => ({ type: LOGIN, login });
export const logout = logout => ({ type: LOGOUT, logout });

// USER
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const addUser = user => ({ type: ADD_USER, user });
export const removeUser = user => ({ type: REMOVE_USER, user });

// MESSAGE
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const newMessage = message => ({ type: NEW_MESSAGE, message });
export const sendMessage = message => ({ type: SEND_MESSAGE, message });
