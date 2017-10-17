import io from 'socket.io-client';
import { eventChannel, END } from 'redux-saga';
import { fork, take, call, put, cancel } from 'redux-saga/effects';
import {
  LOGIN,
  LOGOUT,
  SEND_MESSAGE,
  addUser,
  removeUser,
  newMessage,
} from '../actions';

const uri = 'http://localhost:3003';

const connect = () => {
  const socket = io(uri);
  return new Promise((resolve, reject) => {
    socket.on('connect', () => resolve(socket));
    socket.on('connect_error', () => reject(new Error('CONNECT ERROR')));
  }).catch(error => console.error('[⛔ Connect Error]:', error));
};

// TODO: Implement disconnect
// TODO: Implement unsubscriber for each sosckets
const subscribe = socket =>
  eventChannel(emit => {
    socket.on('users.login', ({ username }) => emit(addUser({ username })));
    socket.on('users.logout', ({ username }) => emit(removeUser({ username })));
    socket.on('message.new', ({ message }) => emit(newMessage({ message })));
    socket.on('disconnect', e => emit(END));
    return () => {};
  });

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(socket) {
  while (true) {
    const { message } = yield take(SEND_MESSAGE);

    socket.emit('message', message);
  }
}

function* handleIO(socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* chatFlow() {
  while (true) {
    let { username } = yield take(LOGIN);
    const socket = yield call(connect);
    socket.emit('login', { username });
    const task = yield fork(handleIO, socket);
    console.log(task);
    yield take(LOGOUT);
    yield cancel(...task);
    socket.emit('logout');
  }
}

export const chatSagas = [fork(chatFlow)];
