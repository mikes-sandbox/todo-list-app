import request from '../common/request';

export async function getUserDetails() {
    try {
        const response = await request.get('/auth/getUser');
        return response.data;
    } catch (err) {
        return;
    }
}