import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todoList, newTodo) => {
    const uuid = uuidv4();
    const todo = { name: newTodo, completed: false, id: uuid };
    return [...todoList, todo];
};

export const toggleTodoCompletion = (todoList, todoToToggle) => {
    return todoList.map(todo =>
        todo.id === todoToToggle.id
            ? { ...todo, completed: !todo.completed }
            : todo
    );
};

export const deleteTodo = (todoList, todoToDelete) => {
    return todoList.filter(todo => todo.id !== todoToDelete.id);
};

export const clearCompleted = (todoList) => {
    return todoList.filter(todo => !todo.completed);
};