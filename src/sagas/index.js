import { all } from 'redux-saga/effects';

import { chatSagas } from './chat';

export default function* root() {
  yield all([...chatSagas]);
}
