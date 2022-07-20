export const addTodo = (todoList, todo) => {
    return [...todoList, Object.assign({
        completed: false,
        dateModified: new Date().valueOf(),
        isDeleted: false
    }, todo)];
};

export const updateTodo = (todoList, updatedTodo) => {
    return todoList.map(todo =>
        todo.id === updatedTodo.id
            ? updatedTodo : todo
    );
};

export const toggleTodoCompletion = (todoList, todoToToggle) => {
    return todoList.map(todo =>
        todo.id === todoToToggle.id
            ? {
                ...todo,
                completed: !todo.completed,
                dateModified: new Date().valueOf()
            } : todo
    );
};

export const deleteTodo = (todoList, pendingDeletionArray, todoToDelete) => {
    const context = todoList.reduce((ctx, todo) => {
        if (todo.id === todoToDelete.id) {
            ctx.pendingDeletion.push(todo);
        } else {
            ctx.activeTodos.push(todo);
        }
        return ctx;
    }, {
        pendingDeletion: structuredClone(pendingDeletionArray),
        activeTodos: []
    });

    return context;
};

export const todoSuccessfullyDeleted = (pendingDeletionArray, todoId) => {
    return pendingDeletionArray.filter(todo => todo.id !== todoId);
};

// Function returns an object with 2 arrays:
// activeTodos => should not be deleted
// completedTodos => should be deleted
export const clearCompleted = (todoList, pendingDeletionArray) => {
    const context = todoList.reduce((ctx, todo) => {
        if (todo.completed) {
            ctx.pendingDeletion.push(todo);
        } else {
            ctx.activeTodos.push(todo);
        }
        return ctx;
    }, {
        pendingDeletion: structuredClone(pendingDeletionArray),
        activeTodos: []
    });

    return context;
};