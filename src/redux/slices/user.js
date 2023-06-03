import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: { data: null, loading: true },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;
export const selectUserData = (state) => state.user.userData;
export const userReducer = userSlice.reducer;