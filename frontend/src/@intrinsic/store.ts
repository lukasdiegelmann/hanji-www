import { configureStore } from "@reduxjs/toolkit";
import navbarIndicatorSlice from "../components/scaffolding/navbar/navbar-indicator/NavbarIndicator.slice";
import playerSlice from "../components/scaffolding/player/Player.slice";

export const store = configureStore({
    reducer: {
        navbarIndicator: navbarIndicatorSlice.reducer,
        player: playerSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
