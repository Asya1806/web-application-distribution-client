import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axios";
import Cookies from "js-cookie";

// Получение всех специальностей
export const getAllSpecialties = createAsyncThunk(
    "specialties/get-allSpec",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Specialty/AllSpec", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)

// добавление специальности
export const addSpecialty = createAsyncThunk(
    "specialties/addSpecialty",
    async (params) => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.post("api/Specialty", params, { Authorization: `bearer ${token}`, headers, })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response;
            });
        return data;
    }
);

// Редактирование специальности
export const editSpecialty = createAsyncThunk(
    "specialties/editSpecialty",
    async (params) => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance
            .put(`api/Specialty/${params.spec_Id}`, params, { Authorization: `bearer ${token}`, headers, })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response;
            });
        return data;
    }
);

// Удаление специальности
export const deleteSpecialty = createAsyncThunk("deleteSpecialty", async (params) => {
    const token = Cookies.get("access-token");
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = await axiosInstance.delete(`/api/Specialty/${params}`, { Authorization: `bearer ${token}`, headers, });
    return data;
})
