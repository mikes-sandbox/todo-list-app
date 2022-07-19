import { v4 as uuidv4 } from 'uuid';

import TodoActionTypes from "./todo.types";

export const addTodo = todoString => ({
    type: TodoActionTypes.ADD_TODO,
    payload: {
        name: todoString,
        id: uuidv4(),
        completed: false,
        dateModified: new Date().valueOf()
    }
});

export const toggleTodoCompletion = todo => ({
    type: TodoActionTypes.TOGGLE_TODO_COMPLETION,
    payload: todo
});

export const deleteTodo = todo => ({
    type: TodoActionTypes.DELETE_TODO,
    payload: todo
});

export const clearCompleted = () => ({
    type: TodoActionTypes.CLEAR_COMPLETED,
});