import { configureStore } from "@reduxjs/toolkit";
import navbarIndicatorSlice from "../components/scaffolding/navbar/navbar-indicator/NavbarIndicator.slice";
import playerSlice from "../components/scaffolding/player/Player.slice";
import skeletonSlice from "../components/scaffolding/skeleton/Skeleton.slice";

export const store = configureStore({
    reducer: {
        navbarIndicator: navbarIndicatorSlice.reducer,
        player: playerSlice.reducer,
        skeleton: skeletonSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
