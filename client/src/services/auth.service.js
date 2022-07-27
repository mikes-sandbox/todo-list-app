import request from '../common/request';

export async function httpGetUserDetails() {
    try {
        const response = await request.get('/auth/getUser');
        return response.data;
    } catch (err) {
        return;
    }
}

export async function httpSignOutUser() {
    try {
        const response = await request.get('/auth/logout');
        return response.data;
    } catch (err) {
        return;
    }
}