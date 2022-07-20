import axios from 'axios';
import { BASE_API_URL } from '../common/config';

// const UNAUTHORIZED = 401;
// axios.interceptors.response.use(
//     response => response,
//     error => {
//         const { status } = error.response;
//         if (status === UNAUTHORIZED) {
//             console.log("CAUGHT IT!!!")
//         }
//         return Promise.reject(error);
//     }
// );

// todo if 401, redirect to login screen
export async function getUserDetails() {
    try {
        const response = await axios.get(`${BASE_API_URL}/auth/getUser`,
            { withCredentials: true });
        return response.data;
    } catch (err) {
        return;
    }
}
