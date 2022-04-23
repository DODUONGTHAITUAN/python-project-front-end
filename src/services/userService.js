import axios from '../axios';

const userService = {
    createNewUser: (data) => {
        return axios.post('/user/create', { ...data });
    },
    getAllUsers: (data) => {
        return axios.get('/user/get-users', { params: { ...data } });
    },
    deleteUser: (data) => {
        return axios.delete('/user/delete', { params: { id: data } });
    },

    getUserByID: (id) => {
        return axios.get('/user/get-by-id', { params: { id: id } });
    },
    updateUserById: (data) => {
        return axios.put('/user/update', { ...data });
    },
    getUserByEmail: (data) => {
        return axios.post('/user/get-by-email', { ...data });
    },
    handleVerifyEmail: (email) => {
        return axios.post('/user/verify-account', { email });
    },
};

export default userService;
