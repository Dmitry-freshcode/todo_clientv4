import { all } from 'redux-saga/effects';
import { watchActionUser } from './user'
import { watchActionError } from './error'

export default function* rootSaga() {
    yield all([
        watchActionUser(),
        watchActionError(),
    ]);
};