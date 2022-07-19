import axios from 'axios';

// todo if 401, redirect to login screen
export async function httpCreateTodo(todo) {
    try {
        const response = await axios.get('http://localhost:8000/api/v1/todo/',
            { withCredentials: true });
        return response.data;
    } catch (err) {
        console.log(err);
        return;
    }
}
