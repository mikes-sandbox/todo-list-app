import { createSelector } from 'reselect';

const selectTodo = state => state.todo;

export const selectTodoList = createSelector(
    [selectTodo],
    todo => todo.activeTodos
);

export const selectPendingDeleteTodos = createSelector(
    [selectTodoList],
    activeTodos => activeTodos.reduce(function (deletionIds, todo) {
        if (todo.isDeleted) {
            deletionIds.push(todo.id);
        }
        return deletionIds;
    }, [])
);


export const selectTodoById = todoId => createSelector(
    [selectTodoList],
    activeTodos => activeTodos.find(todo => todo.id === todoId)
);



