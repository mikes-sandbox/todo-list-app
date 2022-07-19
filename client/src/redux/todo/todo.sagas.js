import { takeLatest, put, all, call, select } from 'redux-saga/effects';

import TodoActionTypes from './todo.types';
import { httpCreateTodo } from '../../services/todo.service';

export function* createTodo(addTodoAction) {
    const todo = addTodoAction.payload;
    console.log('Creating todo: ', todo);
    try {
        const dbTodo = yield call(httpCreateTodo);
        console.log('TODO RESULT: ', dbTodo);
        // if (!dbUser)
        //     return yield put(noUserDetected());

        // yield put(signInSuccess(dbUser));
    } catch (error) {
        // yield put(signInFailure(error));
    }
    console.log("CREATING CLOUD TODO");
    yield call(httpCreateTodo);
}


export function* onAddTodo() {
    yield takeLatest(TodoActionTypes.ADD_TODO, createTodo);
}

export function* todoSagas() {
    yield all([
        call(onAddTodo),
    ]);
}
