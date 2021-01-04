import {
    createSlice,
    PayloadAction,
    SliceCaseReducers,
    CaseReducer,
} from "@reduxjs/toolkit";

export type InitialState = {
    instances: {
        [ID: string]: {
            URI: null | string;
            DATA: {
                closed: boolean;
                currentTime: number;
            };
        };
    };
};

type CaseReducers = {
    createInstance: CaseReducer<
        InitialState,
        PayloadAction<keyof InitialState["instances"]>
    >;
    toggleInstance: CaseReducer<
        InitialState,
        PayloadAction<keyof InitialState["instances"]>
    >;
    setInstanceURI: CaseReducer<
        InitialState,
        PayloadAction<{ ID: keyof InitialState["instances"]; URI: string }>
    >;
    setInstanceProgress: CaseReducer<
        InitialState,
        PayloadAction<{
            ID: keyof InitialState["instances"];
            progress: InitialState["instances"][keyof InitialState["instances"]]["DATA"]["currentTime"];
        }>
    >;
} & SliceCaseReducers<InitialState>;

const playerSlice = createSlice<InitialState, CaseReducers>({
    name: "player",
    initialState: {
        instances: {},
    },
    reducers: {
        createInstance: (state, { payload }) => {
            if (!state.instances[payload]) {
                state.instances[payload] = {
                    DATA: {
                        closed: true,
                        currentTime: 0,
                    },
                    URI: null,
                };
            }
        },
        toggleInstance: (state, { payload }) => {
            state.instances[payload].DATA.closed = !state.instances[payload]
                .DATA.closed;
        },
        setInstanceURI: (state, { payload }) => {
            if (state.instances[payload.ID]) {
                state.instances[payload.ID].URI = payload.URI;
            }
        },
        setInstanceProgress: (state, { payload }) => {
            if (state.instances[payload.ID]) {
                state.instances[payload.ID].DATA.currentTime = payload.progress;
            }
        },
    },
});

export default playerSlice;
