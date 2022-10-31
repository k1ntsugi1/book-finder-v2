import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import fetchGetDataBySearchingOptions from '../asyncThunks/fetchGetDataBySearchingOptions';

import { IDataOfSearchingParams } from "../asyncThunks/interfaces";


interface InitialState {
    range: {
        startIndex: number,
        maxResults : number,
    },
    statusOfLoading: string,
    statusOfError: string,
    searchParams: IDataOfSearchingParams,
};


const initialState: InitialState  = {
    range: {
        startIndex: 0,
        maxResults: 30,
    },
    statusOfLoading: 'fulfilled',
    statusOfError: '',
    searchParams: {
        currentNameOfItem: '',
        currentAuthorOfItem: '',
        currentTypeOfCategory: 'all',
        currentTypeOfOrder: 'relevance',
        currentTypeOfItem: 'books',
        currentTypeOfFilter: 'full',
    },
};

const dataOfSearchingOptionsSlice = createSlice({
    name: 'data of searching',
    initialState,
    reducers: {
        decreaseStartIndex(state) {
            state.range.startIndex = state.range.startIndex - 2 * state.range.maxResults;
        },
        resetParams(state) {
            state.range.startIndex = 0;
            state.statusOfLoading = '';
            state.statusOfError = '';
            state.searchParams = initialState.searchParams
        },
        updateStartIndex(state, actions: PayloadAction<{num: number}>) {
            state.range.startIndex = state.range.maxResults * actions.payload.num;
        },
        updateList() {}
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGetDataBySearchingOptions.pending, (state) => {
            state.statusOfLoading = 'pending';
            state.statusOfError = '';
        })
        .addCase(fetchGetDataBySearchingOptions.fulfilled, (state, { payload }) => {
            const { searchParams, startIndex } = payload;
            state.statusOfLoading = 'fulfilled';
            state.range.startIndex = startIndex;
            
            state.searchParams = searchParams;
        })
        .addCase(fetchGetDataBySearchingOptions.rejected, (state, { payload }) => {
            state.statusOfLoading = 'rejected';
            state.statusOfError = payload?.error.toString();
        } )
    }
});

export const actionsDataOfSearchingOptions = dataOfSearchingOptionsSlice.actions;

export default dataOfSearchingOptionsSlice.reducer;