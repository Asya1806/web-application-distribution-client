import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jwt-decode";

export const getToken = () => Cookies.get("access-token");

export const isAdmin = () => {
    const token = getToken();
    return token !== undefined;
    // if (token === undefined) {
    //     return false;
    // }
    // const data = jwt(token);
    // return data.role === "admin";
};

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

const axiosInstance = axios.create({
    baseURL: "http://localhost:5283/",
    headers: {
        Authorization: getAuthorizationHeader(),
    },
});

const axiosAuthInstance = axios.create({
    baseURL: "http://localhost:5283/",
    headers: {
        Authorization: getAuthorizationHeader(),
    },
});

axiosInstance.interceptors.response.use(
    (config) => {
        return config;
    },
    (error) => {
        if (error.response.status === 401) {
            window.location.href = "/";
        }
        if (error.response.status === 500) {
            window.location.href = "/error";
        }

        throw error;
    }
);

export { axiosInstance, axiosAuthInstance };