import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../apis/auth.apis";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {},
    reducers: {},
    extraReducers: builder => builder


})

export default authSlice.reducer