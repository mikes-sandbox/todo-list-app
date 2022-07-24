import { takeLatest, put, all, call, select, takeEvery } from 'redux-saga/effects';

import TodoActionTypes from './todo.types';
import {
    httpDeleteTodo,
    httpUpsertTodo,
    httpDeleteManyTodos,
    httpGetAllActiveTodos
} from '../../services/todo.service';
import {
    selectTodoById,
    selectPendingDeleteTodoIds,
    selectUnsavedTodos,
    selectAllTodos
} from './todo.selectors';
import {
    deleteTodoSuccess,
    deleteTodoFailure,
    clearCompletedSuccess,
    clearCompletedFailure,
    getAllActiveTodosSuccess,
    getAllActiveTodosFailure,
    saveUnsavedTodosStart,
    saveUnsavedTodosSuccess,
    saveUnsavedTodosFailure,
    mergeTodosStart,
    mergeTodosSuccess,
    mergeTodosFailure,
    saveTodoSuccess,
    saveTodoFailure
} from './todo.actions';


export function* saveTodo(addTodoAction) {
    const todoId = addTodoAction.payload.id;
    const todo = yield select(selectTodoById(todoId));

    try {
        const dbTodo = yield call(httpUpsertTodo, todo);
        yield put(saveTodoSuccess(dbTodo));
    } catch (error) {
        console.log(error);
        yield put(saveTodoFailure(error.message));
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
    const deletionIds = yield select(selectPendingDeleteTodoIds);

    try {
        const dbActiveTodos = yield call(httpDeleteManyTodos, deletionIds);
        yield put(clearCompletedSuccess());
        yield put(mergeTodosStart(dbActiveTodos));
    } catch (error) {
        console.log(error);
        yield put(clearCompletedFailure(error.message));
    }
}


export function* getActiveTodos() {
    try {
        const dbTodos = yield call(httpGetAllActiveTodos);
        yield put(getAllActiveTodosSuccess(dbTodos));
        yield put(mergeTodosStart(dbTodos));
    } catch (error) {
        console.log(error);
        yield put(getAllActiveTodosFailure(error.message));
    }
}

export function* mergeTodos(mergeTodosAction) {
    try {
        const newTodosObj = mergeTodosAction.payload.reduce((result, todo) => ({ ...result, [todo.id]: todo }), {});
        const localTodosArr = yield select(selectAllTodos);

        localTodosArr.forEach(todo => {

            const localTodo = { ...todo, requiresSave: true };
            const todoExistsDb = newTodosObj[localTodo.id];

            // // If the local todo is newer than the DB todo, keep the local and save it in the DB
            if (todoExistsDb && todoExistsDb.dateModified < localTodo.dateModified) {
                newTodosObj[localTodo.id] = localTodo;
                console.log("PRESERVING: ", localTodo);
            }

            // // If the todo is only stored locally and isnt marked for deletion, preserve it
            if (!todoExistsDb && !localTodo._id && !localTodo.isDeleted) {
                newTodosObj[localTodo.id] = localTodo;
            }

        });

        const newTodosArr = Object.values(newTodosObj);
        yield put(mergeTodosSuccess(newTodosArr));
        yield put(saveUnsavedTodosStart());
    } catch (error) {
        console.log(error);
        yield put(mergeTodosFailure(error.message));
    }
}

export function* saveUnsavedTodos() {
    const unsavedTodos = yield select(selectUnsavedTodos);
    console.log("Saving: ", unsavedTodos);
    try {
        yield all(unsavedTodos.map(todo => call(saveTodo, { payload: todo })));
        yield put(saveUnsavedTodosSuccess());
    } catch (error) {
        console.log(error);
        yield put(saveUnsavedTodosFailure(error.message));
    }
}


export function* onAddTodo() {
    yield takeEvery(TodoActionTypes.ADD_TODO_START, saveTodo);
}

export function* onToggleTodoCompletion() {
    yield takeEvery(TodoActionTypes.TOGGLE_TODO_COMPLETION_START, saveTodo);
}

export function* onDeleteTodo() {
    yield takeEvery(TodoActionTypes.DELETE_TODO_START, deleteTodo);
}

export function* onClearCompleted() {
    yield takeLatest(TodoActionTypes.CLEAR_COMPLETED_START, clearPendingDeletionTodos);
}

export function* onGetActiveTodos() {
    yield takeLatest(TodoActionTypes.GET_ALL_ACTIVE_TODOS_START, getActiveTodos);
}

export function* onMergeTodos() {
    yield takeLatest(TodoActionTypes.MERGE_TODOS_START, mergeTodos);
}

export function* onSaveUnsavedTodos() {
    yield takeLatest(TodoActionTypes.SAVE_UNSAVED_TODOS_START, saveUnsavedTodos);
}

export function* todoSagas() {
    yield all([
        call(onAddTodo),
        call(onToggleTodoCompletion),
        call(onDeleteTodo),
        call(onClearCompleted),
        call(onGetActiveTodos),
        call(onMergeTodos),
        call(onSaveUnsavedTodos),
    ]);
}
