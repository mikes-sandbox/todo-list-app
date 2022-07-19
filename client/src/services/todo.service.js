import axios from 'axios';
import { AUTH_SERVER_URL } from '../common/config';

// todo if 401, redirect to login screen
export async function httpCreateTodo(todo) {
    try {
        const response = await axios.get(`${AUTH_SERVER_URL}/todo`,
            { withCredentials: true });
        return response.data;
    } catch (err) {
        console.log(err);
        return;
    }
}
