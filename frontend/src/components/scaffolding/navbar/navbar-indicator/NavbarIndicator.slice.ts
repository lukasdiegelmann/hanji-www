/**
 * @author lukasdiegelmann
 */

import { createSlice } from "@reduxjs/toolkit";

const navbarIndicatorSlice = createSlice({
    name: "navbarIndicator",
    initialState: {
        // This will hold the value of the navbarIndicator for wether the page
        // is loading or not. This will be used by the LoadingIndicator
        // component.
        isLoading: false,
    },
    reducers: {
        // This is a simple CaseReducer that sets the state.isLoading property
        // equal to its action payload.
        setIsLoading: (state, { payload }) => {
            // Though this is a mutation it will not be treated as one because
            // of the inherent immer package of redux.
            state.isLoading = payload;
        },
    },
});

export default navbarIndicatorSlice;
