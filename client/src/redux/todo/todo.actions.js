import TodoActionTypes from "./todo.types";

export const addTodo = todoString => ({
    type: TodoActionTypes.ADD_TODO,
    payload: todoString
});
