import request from '../common/request';

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
