import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../axios";
import Cookies from "js-cookie";

export const getSortedEntrants = createAsyncThunk(
    "entrants/get-all",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/All", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)

export const getSortedEntrantsBySpecBudget_1 = createAsyncThunk(
    "entrants/get-spec_by_budget_1",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_budget_1", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)

export const getSortedEntrantsBySpecBudget_2 = createAsyncThunk(
    "entrants/get-spec_by_budget_2",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_budget_2", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)

export const getSortedEntrantsBySpecBudget_3 = createAsyncThunk(
    "entrants/get-spec_by_budget_3",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_budget_3", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)

export const getSortedEntrantsBySpecBudget_4 = createAsyncThunk(
    "entrants/get-spec_by_budget_4",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_budget_4", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)

export const getSortedEntrantsBySpecBudget_5 = createAsyncThunk(
    "entrants/get-spec_by_budget_5",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_budget_5", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)

export const getSortedEntrantsBySpecBudget_6 = createAsyncThunk(
    "entrants/get-spec_by_budget_6",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_budget_6", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)
export const getSortedEntrantsBySpecPaid_1 = createAsyncThunk(
    "entrants/get-spec_by_paid_1",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_paid_1", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)
export const getSortedEntrantsBySpecPaid_2 = createAsyncThunk(
    "entrants/get-spec_by_paid_2",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_paid_2", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)
export const getSortedEntrantsBySpecPaid_3 = createAsyncThunk(
    "entrants/get-spec_by_paid_3",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_paid_3", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)
export const getSortedEntrantsBySpecPaid_4 = createAsyncThunk(
    "entrants/get-spec_by_paid_4",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_paid_4", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)
export const getSortedEntrantsBySpecPaid_5 = createAsyncThunk(
    "entrants/get-spec_by_paid_5",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_paid_5", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)
export const getSortedEntrantsBySpecPaid_6 = createAsyncThunk(
    "entrants/get-spec_by_paid_6",
    async () => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.get(
            "api/Entrant/Specialty_by_paid_6", { Authorization: `bearer ${token}`, headers, });
        return data;
    }
)

// добавление абитуриента
export const addEntrant = createAsyncThunk(
    "entrants/addEntrant",
    async (params) => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance.post("api/Entrant", params, { Authorization: `bearer ${token}`, headers, })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response;
            });
        return data;
    }
);

// Редактирование абитуриента
export const editEntrant = createAsyncThunk(
    "entrants/edit-entrant",
    async (params) => {
        const token = Cookies.get("access-token");
        const headers = { Authorization: `Bearer ${token}` };
        const { data } = await axiosInstance
            .put(`api/Entrant/${params.entrant_Id}`, params, { Authorization: `bearer ${token}`, headers, })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return error.response;
            });
        return data;
    }
);

// Удаление абитуриента
export const deleteEntrant = createAsyncThunk("deleteEntrant", async (params) => {
    const token = Cookies.get("access-token");
    const headers = { Authorization: `Bearer ${token}` };
    const { data } = await axiosInstance.delete(`/api/Entrant/${params}`, { Authorization: `bearer ${token}`, headers, });
    return data;
})
