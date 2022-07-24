import axios from 'axios';
import { BASE_API_URL } from './config';
import { createBrowserHistory } from 'history';
import { store } from '../redux/store';
import { userUnauthorised } from '../redux/user/user.actions';

const history = createBrowserHistory();

const UNAUTHORIZED = 401;

const request = axios.create({
    baseURL: BASE_API_URL,
    withCredentials: true
});

request.interceptors.response.use(
    response => response,
    error => {
        const { status } = error.response;
        if (status === UNAUTHORIZED) {
            store.dispatch(userUnauthorised());
            history.push('/login');
        }
        return Promise.reject(error);
    }
);

export default request;