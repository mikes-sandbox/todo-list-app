import { takeLatest, put, all, call, select, takeEvery } from 'redux-saga/effects';

import TodoActionTypes from './todo.types';
import { httpDeleteTodo, httpUpsertTodo, httpDeleteManyTodos } from '../../services/todo.service';
import { addTodoSuccess, addTodoFailure, toggleTodoCompletionSuccess, toggleTodoCompletionFailure, deleteTodoSuccess, deleteTodoFailure, clearCompletedSuccess, clearCompletedFailure } from './todo.actions';
import { selectTodoById, selectPendingDeletionIds } from './todo.selectors';

export function* createTodo(addTodoAction) {
    const todoId = addTodoAction.payload.id;
    const todo = yield select(selectTodoById(todoId));

    try {
        const dbTodo = yield call(httpUpsertTodo, todo);
        yield put(addTodoSuccess(dbTodo));
    } catch (error) {
        console.log(error);
        yield put(addTodoFailure(error.message));
    }
}

export function* updateTodo(toggleTodoAction) {
    const todoId = toggleTodoAction.payload.id;
    const todo = yield select(selectTodoById(todoId));

    try {
        // // If a todo is missing ther _id field, then it is not in the db
        // // If you wanted to explicitly run through the item creation flow you could run the below
        // // block, but since it uses upsert, we will just call the upsert directly
        // if (!todo._id) {
        //     console.log("TODO NOT SAVED YET, CREATING: ", todo);
        //     return yield call(createTodo, toggleTodoAction);
        // }

        const dbTodo = yield call(httpUpsertTodo, todo);
        yield put(toggleTodoCompletionSuccess(dbTodo));
    }
    catch (error) {
        console.log(error);
        yield put(toggleTodoCompletionFailure(error.message));
    }
}

export function* deleteTodo(deleteTodoAction) {
    const todoId = deleteTodoAction.payload.id;

    try {
        yield call(httpDeleteTodo, todoId);
        yield put(deleteTodoSuccess(todoId));
    } catch (error) {
        console.log(error);
        yield put(deleteTodoFailure(error.message));
    }
}

export function* clearPendingDeletionTodos() {
    const deletionIds = yield select(selectPendingDeletionIds);
    
    try {
        yield call(httpDeleteManyTodos, deletionIds);
        yield put(clearCompletedSuccess(deletionIds));
    } catch (error) {
        console.log(error);
        yield put(clearCompletedFailure(error.message));
    }
}

export function* onAddTodo() {
    yield takeEvery(TodoActionTypes.ADD_TODO_START, createTodo);
}

export function* onToggleTodoCompletion() {
    yield takeEvery(TodoActionTypes.TOGGLE_TODO_COMPLETION_START, updateTodo);
}

export function* onDeleteTodo() {
    yield takeEvery(TodoActionTypes.DELETE_TODO_START, deleteTodo);
}

export function* onClearCompleted() {
    yield takeLatest(TodoActionTypes.CLEAR_COMPLETED_START, clearPendingDeletionTodos);
}

export function* todoSagas() {
    yield all([
        call(onAddTodo),
        call(onToggleTodoCompletion),
        call(onDeleteTodo),
        call(onClearCompleted),
    ]);
}
