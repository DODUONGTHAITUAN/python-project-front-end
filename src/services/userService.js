import axios from "../axios";

const userService = {
    createNewUser: (data) => {
        return axios.post("/user/create", { ...data });
    },
    getAllUsers: (data) => {
        return axios.get("/user/get-users", { params: { ...data } });
    },
};

export default userService;
