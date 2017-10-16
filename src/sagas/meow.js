import { delay } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';

function* meow() {
  try {
  } catch (error) {}
}

function* watchForMeow() {
  while (true) {}
}

export const meowSagas = [fork(watchForMeow)];
