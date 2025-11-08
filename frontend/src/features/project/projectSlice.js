import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    description: "",
};

const projectSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        setProject(state, action) {
            state.title = action.payload.title;
            state.description = action.payload.description;
        },
        removeProject(state) {
            state.title = "";
            state.description = "";
        },
    },
});

export const { setProject, removeProject } = projectSlice.actions;
export default projectSlice.reducer;
