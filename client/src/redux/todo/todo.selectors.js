import { createSelector } from 'reselect';

const selectTodo = state => state.todo;

export const selectTodoList = createSelector(
    [selectTodo],
    todo => todo.activeTodos
);

export const selectPendingDeletionList = createSelector(
    [selectTodo],
    todo => todo.pendingDeletion
);

export const selectPendingDeletionIds = createSelector(
    [selectPendingDeletionList],
    pendingDeletion => pendingDeletion.map(todo => todo.id)
);

export const selectTodoById = todoId => createSelector(
    [selectTodoList],
    activeTodos => activeTodos.find(todo => todo.id === todoId)
);



