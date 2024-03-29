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

export const deleteTodo = (todoList, todoToDelete) => {
    return todoList.map(todo =>
        todo.id === todoToDelete.id
            ? {
                ...todo,
                isDeleted: true,
                dateModified: new Date().valueOf()
            } : todo
    );
};

export const todoSuccessfullyDeleted = (todoList, deletedTodoId) => {
    return todoList.filter(todo => todo.id !== deletedTodoId);
};


export const clearCompleted = (todoList) => {
    return todoList.map(todo =>
        todo.completed
            ? {
                ...todo,
                isDeleted: true,
                dateModified: new Date().valueOf()
            } : todo
    );
};
