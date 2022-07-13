import TodoActionTypes from "./todo.types";

export const addTodo = todoString => ({
    type: TodoActionTypes.ADD_TODO,
    payload: todoString
});

export const toggleTodoCompletion = todo => ({
    type: TodoActionTypes.TOGGLE_TODO_COMPLETION,
    payload: todo
});