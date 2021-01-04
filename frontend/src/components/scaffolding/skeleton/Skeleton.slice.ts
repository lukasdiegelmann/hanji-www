import {
    createSlice,
    SliceCaseReducers,
    CaseReducer,
    PayloadAction,
} from "@reduxjs/toolkit";

type InitialState = {
    data: {
        commands: {
            [name: string]: string;
        };
    };
};

type CaseReducers = {
    updateCommands: CaseReducer<
        InitialState,
        PayloadAction<InitialState["data"]["commands"]>
    >;
} & SliceCaseReducers<InitialState>;

const skeletonSlice = createSlice<InitialState, CaseReducers>({
    name: "skeleton",
    initialState: {
        data: {
            commands: {},
        },
    },
    reducers: {
        updateCommands: (state, { payload }) => {
            state.data.commands = payload;
        },
    },
});

export default skeletonSlice;
