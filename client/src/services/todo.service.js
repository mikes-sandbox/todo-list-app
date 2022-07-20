import axios from 'axios';
import { BASE_API_URL } from '../common/config';

// todo if 401, redirect to login screen
export async function httpUpsertTodo(todo) {
    const response = await axios.post(
        `${BASE_API_URL}/todo`, todo, {
        withCredentials: true
    });
    return response.data;
}

export async function httpDeleteTodo(todoId) {
    const response = await axios.delete(
        `${BASE_API_URL}/todo/${todoId}`, {
        withCredentials: true
    });
    return response.data;
}

export async function httpDeleteManyTodos(todoIdArray) {
    const response = await axios.post(`${BASE_API_URL}/todo/clear-completed`,
        todoIdArray,
        { withCredentials: true }
    );
    return response.data;
}
