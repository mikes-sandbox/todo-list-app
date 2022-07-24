import { createSelector } from 'reselect';

const selectTodo = state => state.todo;

export const selectAllTodos = createSelector(
    [selectTodo],
    todo => todo.todos
);

export const selectActiveTodos = createSelector(
    [selectAllTodos],
    todos => todos.filter(todo => !todo.isDeleted)
);

export const selectTodoById = todoId => createSelector(
    [selectAllTodos],
    todos => todos.find(todo => todo.id === todoId)
);

export const selectPendingDeleteTodoIds = createSelector(
    [selectAllTodos],
    todos => todos.reduce(function (deletionIds, todo) {
        if (todo.isDeleted) {
            deletionIds.push(todo.id);
        }
        return deletionIds;
    }, [])
);

export const selectUnsavedTodos = createSelector(
    [selectAllTodos],
    todos => todos.filter(todo => todo.requiresSave)
);





