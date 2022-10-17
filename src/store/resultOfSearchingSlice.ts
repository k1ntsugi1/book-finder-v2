import { createSlice, createEntityAdapter  } from "@reduxjs/toolkit";
import fetchDataAsyncThunk from './fetchDataAsyncThunk';
import { actionsDataOfSearching } from './dataOfSearching';
import { RootState } from "./index";
import { ParsedItem } from '../helpersFunc/parseResponseItems'

interface IInitialState {
    totalItems: number
}

const entityAdapterOfResult = createEntityAdapter<ParsedItem>();
const initialState: IInitialState = {
    totalItems: 0
}

const resultOfSearchingSlice = createSlice({
    name: 'result of searching',
    initialState: entityAdapterOfResult.getInitialState(initialState),
    reducers: {
        removeItems(state) {
            console.log(1)
            state.totalItems = 0;
            entityAdapterOfResult.removeAll(state);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataAsyncThunk.fulfilled, (state, { payload }) => {
            const { items, totalItems, isNewRequest } = payload;
            
            if (isNewRequest) resultOfSearchingSlice.caseReducers.removeItems(state);
            state.totalItems = totalItems;
            entityAdapterOfResult.upsertMany(state, items);
        })
        .addCase(actionsDataOfSearching.resetParams, (state) => {
            resultOfSearchingSlice.caseReducers.removeItems(state);
        })
    }
});

export const selectorsResultOfSearching = entityAdapterOfResult.getSelectors<RootState>(store => store.resultOfSearching);

export const actionsResultOfSearching = resultOfSearchingSlice.actions;

export default resultOfSearchingSlice.reducer;