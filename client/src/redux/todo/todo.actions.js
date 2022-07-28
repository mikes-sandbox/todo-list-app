import { v4 as uuidv4 } from 'uuid';

import TodoActionTypes from "./todo.types";

export const addTodoStart = todoString => ({
    type: TodoActionTypes.ADD_TODO_START,
    payload: {
        name: todoString,
        id: uuidv4(),
    }
});
export const toggleTodoCompletionStart = todo => ({
    type: TodoActionTypes.TOGGLE_TODO_COMPLETION_START,
    payload: todo
});
export const saveTodoSuccess = dbTodo => ({
    type: TodoActionTypes.SAVE_TODO_SUCCESS,
    payload: dbTodo
});
export const saveTodoFailure = errorMessage => ({
    type: TodoActionTypes.SAVE_TODO_FAILURE,
    payload: errorMessage
});


export const deleteTodoStart = todo => ({
    type: TodoActionTypes.DELETE_TODO_START,
    payload: todo
});
export const deleteTodoSuccess = todoId => ({
    type: TodoActionTypes.DELETE_TODO_SUCCESS,
    payload: todoId
});
export const deleteTodoFailure = errorMessage => ({
    type: TodoActionTypes.DELETE_TODO_FAILURE,
    payload: errorMessage
});


export const clearCompletedStart = () => ({
    type: TodoActionTypes.CLEAR_COMPLETED_START,
});
export const clearCompletedSuccess = () => ({
    type: TodoActionTypes.CLEAR_COMPLETED_SUCCESS,
});
export const clearCompletedFailure = errorMessage => ({
    type: TodoActionTypes.CLEAR_COMPLETED_FAILURE,
    payload: errorMessage
});


export const getAllActiveTodosStart = () => ({
    type: TodoActionTypes.GET_ALL_ACTIVE_TODOS_START,
});
export const getAllActiveTodosSuccess = dbTodos => ({
    type: TodoActionTypes.GET_ALL_ACTIVE_TODOS_SUCCESS,
    payload: dbTodos
});
export const getAllActiveTodosFailure = errorMessage => ({
    type: TodoActionTypes.GET_ALL_ACTIVE_TODOS_FAILURE,
    payload: errorMessage
});


export const mergeTodosStart = dbTodos => ({
    type: TodoActionTypes.MERGE_TODOS_START,
    payload: dbTodos
});
export const mergeTodosSuccess = mergedTodos => ({
    type: TodoActionTypes.MERGE_TODOS_SUCCESS,
    payload: mergedTodos
});
export const mergeTodosFailure = errorMessage => ({
    type: TodoActionTypes.MERGE_TODOS_FAILURE,
    payload: errorMessage
});


export const saveUnsavedTodosStart = () => ({
    type: TodoActionTypes.SAVE_UNSAVED_TODOS_START,
});
export const saveUnsavedTodosSuccess = () => ({
    type: TodoActionTypes.SAVE_UNSAVED_TODOS_SUCCESS,
});
export const saveUnsavedTodosFailure = errorMessage => ({
    type: TodoActionTypes.SAVE_UNSAVED_TODOS_FAILURE,
    payload: errorMessage
});


export const purgeTodos = () => ({
    type: TodoActionTypes.PURGE_TODOS,
});
