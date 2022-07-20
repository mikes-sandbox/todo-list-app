import { v4 as uuidv4 } from 'uuid';

import TodoActionTypes from "./todo.types";

export const addTodoStart = todoString => ({
    type: TodoActionTypes.ADD_TODO_START,
    payload: {
        name: todoString,
        id: uuidv4(),
    }
});
export const addTodoSuccess = dbTodo => ({
    type: TodoActionTypes.ADD_TODO_SUCCESS,
    payload: dbTodo
});
export const addTodoFailure = errorMessage => ({
    type: TodoActionTypes.ADD_TODO_FAILURE,
    payload: errorMessage
});


export const toggleTodoCompletionStart = todo => ({
    type: TodoActionTypes.TOGGLE_TODO_COMPLETION_START,
    payload: todo
});
export const toggleTodoCompletionSuccess = dbTodo => ({
    type: TodoActionTypes.TOGGLE_TODO_COMPLETION_SUCCESS,
    payload: dbTodo
});
export const toggleTodoCompletionFailure = errorMessage => ({
    type: TodoActionTypes.TOGGLE_TODO_COMPLETION_FAILURE,
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