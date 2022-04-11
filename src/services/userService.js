import axios from "../axios";

const userService = {
    createNewUser: (data) => {
        return axios.post("/user/create", { ...data });
    },
    getAllUsers: (data) => {
        return axios.get("/user/get-users", { params: { ...data } });
    },
    deleteUser: (data) => {
        return axios.delete("/user/delete", { params: { id: data } });
    },

    getUserByID: (id) => {
        return axios.get("/user/get-by-id", { params: { id: id } });
    },
    updateUserById: (data) => {
        return axios.put("/user/update", { ...data });
    },
};

export default userService;
