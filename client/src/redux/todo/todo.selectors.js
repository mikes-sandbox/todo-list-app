import { createSelector } from 'reselect';

const selectTodo = state => state.todo;

export const selectTodoList = createSelector(
    [selectTodo],
    todo => todo.todos
);

