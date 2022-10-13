import { createSlice } from "@reduxjs/toolkit";
import fetchDataAsyncThunk from './fetchDataAsyncThunk';
import { ParsedItem } from "../helpersFunc/parseResponseItems";
import { actionsDataOfSearching } from './dataOfSearching';
import { DataOfSearchingParams } from './fetchDataAsyncThunk';

interface InitialState {
    items: ParsedItem[],
    searchParams: DataOfSearchingParams;
}

const initialState: InitialState = {
    items: [],
    searchParams: {
        currentNameOfItem: '',
        currentAuthorOfItem: '',
        currentTypeOfCategory: 'all',
        currentTypeOfOrder: 'relevance',
        currentTypeOfItem: 'books',
        currentTypeOfFilter: 'full',
    },
};


const resultOfSearchingSlice = createSlice({
    name: 'result of searching',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataAsyncThunk.fulfilled, (state, { payload }) => {
            const { items, searchParams } = payload;
            state.items = items;
            state.searchParams = searchParams
        })
        .addCase(actionsDataOfSearching.resetParams, (state) => {
            state.items = [];
        })
    }
});

export const actionsResultOfSearching = resultOfSearchingSlice.actions;

export default resultOfSearchingSlice.reducer;