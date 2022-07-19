
export const addTodo = (todoList, todo) => {
    return [...todoList, todo];
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
    return todoList.filter(todo => todo.id !== todoToDelete.id);
};

export const clearCompleted = (todoList) => {
    return todoList.filter(todo => !todo.completed);
};