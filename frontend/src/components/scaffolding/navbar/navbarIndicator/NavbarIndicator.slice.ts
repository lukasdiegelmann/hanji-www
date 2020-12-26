import { createSlice } from "@reduxjs/toolkit";

const navbarIndicatorSlice = createSlice({
    name: "navbarIndicator",
    initialState: {
        isLoading: false,
    },
    reducers: {
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
    },
});

export default navbarIndicatorSlice;
