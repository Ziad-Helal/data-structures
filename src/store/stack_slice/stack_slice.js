import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stackItems: [],
    tempStackItems: [],
    length: 0,
    tempLength: 0,
    size: 0,
    poppedItem: null,
};

export const stackSlice = createSlice({
    name: "stack",
    initialState,
    reducers: {
        push(state, action) {
            state.stackItems.push(action.payload);
            state.length++;
        },
        pop(state) {
            state.poppedItem = state.stackItems.pop();
            state.length--;
        },
        changeSize(state, action) {
            state.size = action.payload;
        },
    },
});

export const stackActions = stackSlice.actions;
