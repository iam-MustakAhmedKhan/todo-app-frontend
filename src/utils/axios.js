import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://todo-app-server-wv5w.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance