import { createAsyncThunk } from "@reduxjs/toolkit";
import jsCookie from "js-cookie";
import { axiosAuthInstance } from "../axios";


export const login = createAsyncThunk(
    "auth/login",
    async (params) => {
        const { data } = await axiosAuthInstance.post(
            "/api/Account",
            params
        );

        jsCookie.set("access-token", data);
        return data;
    });