import { v4 as uuidv4 } from 'uuid';

export const addTodo = (todoList, newTodo) => {
    const uuid = uuidv4();
    const todo = { name: newTodo, completed: false, id: uuid };
    return [...todoList, todo];
};
