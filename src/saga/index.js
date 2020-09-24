import { all } from 'redux-saga/effects';
import { watchActionUser } from './user';
import { watchActionError } from './error';
import { watchActionTasks } from './tasks';
import { watchOnRefresh } from './socket'

export default function* rootSaga() {
    yield all([
        watchActionUser(),
        watchActionError(),
        watchActionTasks(),
        watchOnRefresh(),

    ]);
};