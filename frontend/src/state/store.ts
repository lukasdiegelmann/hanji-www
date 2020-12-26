import { configureStore } from "@reduxjs/toolkit";
import navbarIndicatorSlice from "../components/scaffolding/navbar/navbarIndicator/NavbarIndicator.slice";

export const store = configureStore({
    reducer: {
        navbarIndicator: navbarIndicatorSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
