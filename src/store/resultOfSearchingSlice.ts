import { createSlice } from "@reduxjs/toolkit";
import fetchDataAsyncThunk from './fetchDataAsyncThunk';
import { ParsedItem } from "../helpersFunc/parseResponseItems";
import { actionsDataOfSearching } from './dataOfSearching';

interface InitialState {
    items: ParsedItem[],
}

const initialState: InitialState = {
    items: []
};


const resultOfSearchingSlice = createSlice({
    name: 'result of searching',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataAsyncThunk.fulfilled, (state, { payload }) => {
            const { items } = payload;
            state.items = items;
        })
        .addCase(actionsDataOfSearching.clean, (state) => {
            state.items = [];
        })
    }
});

export const actionsResultOfSearching = resultOfSearchingSlice.actions;

export default resultOfSearchingSlice.reducer;