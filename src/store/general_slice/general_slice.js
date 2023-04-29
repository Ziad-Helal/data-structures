import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataStructure: "",
    operation: "",
    tempDataStructure: "",
    newItem: null,
    position: null,
    tempItem: null,
    transitionDuration: 500,
    isAnimating: false,
    itemWidth: 3,
    pointerWidth: 3,
    variableWidth: 3,
    itemsGap: 0.25,
    containerPadding: 0.25,
    containerBorder: 0.25,
};

export const generalSlice = createSlice({
    name: "general",
    initialState,
    reducers: {
        changeDataStructure(state, action) {
            state.dataStructure = action.payload;
        },
        changeOperation(state, action) {
            state.operation = action.payload;
        },
        changeTempDataStructure(state, action) {
            state.tempDataStructure = action.payload;
        },
        changeNewItem(state, action) {
            state.newItem = action.payload;
        },
        changePosition(state, action) {
            state.position = action.payload;
        },
        changeTempItem(state, action) {
            state.tempItem = action.payload;
        },
        changeTransitionDuration(state, action) {
            state.transitionDuration = action.payload;
        },
        startAnimation(state) {
            state.isAnimating = true;
        },
        endAnimation(state) {
            state.isAnimating = false;
        },
        changeItemWidth(state, action) {
            state.itemWidth = action.payload;
        },
        changeItemsGap(state, action) {
            state.itemsGap = action.payload;
        },
        changeContainerPadding(state, action) {
            state.containerPadding = action.payload;
        },
        changeContainerBorder(state, action) {
            state.containerBorder = action.payload;
        },
    },
});

export const generalActions = generalSlice.actions;
