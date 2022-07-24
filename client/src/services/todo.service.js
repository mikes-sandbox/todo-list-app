// import request from 'request';
// import { BASE_API_URL } from '../common/config';
import request from '../common/request';

// todo if 401, redirect to login screen
export async function httpUpsertTodo(todo) {
    const response = await request.post(
        `/todo`,
        todo
    );
    return response.data;
}

export async function httpDeleteTodo(todoId) {
    const response = await request.delete(
        `/todo/${todoId}`
    );
    return response.data;
}

export async function httpDeleteManyTodos(todoIdArray) {
    const response = await request.post(
        `/todo/clear-completed`,
        todoIdArray
    );
    return response.data;
}

export async function httpGetAllActiveTodos() {
    const response = await request.get(
        `/todo`
    );
    return response.data;
}
