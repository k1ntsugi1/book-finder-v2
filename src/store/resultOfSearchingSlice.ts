import { createSlice, createEntityAdapter  } from "@reduxjs/toolkit";
import fetchDataAsyncThunk from './fetchDataAsyncThunk';
import { actionsDataOfSearching } from './dataOfSearching';
import { RootState } from "./index";
import { ParsedItem } from '../helpersFunc/parseResponseItems'

const entityAdapterOfResult = createEntityAdapter<ParsedItem>();

const resultOfSearchingSlice = createSlice({
    name: 'result of searching',
    initialState: entityAdapterOfResult.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataAsyncThunk.fulfilled, (state, { payload }) => {
            const { items } = payload;
            entityAdapterOfResult.upsertMany(state, items);
        })
        .addCase(actionsDataOfSearching.resetParams, (state) => {
            entityAdapterOfResult.removeAll(state);
        })
    }
});

export const selectorsResultOfSearching = entityAdapterOfResult.getSelectors<RootState>(store => store.resultOfSearching);

export const actionsResultOfSearching = resultOfSearchingSlice.actions;

export default resultOfSearchingSlice.reducer;