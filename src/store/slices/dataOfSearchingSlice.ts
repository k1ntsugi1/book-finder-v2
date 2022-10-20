import { createSlice } from "@reduxjs/toolkit";
import fetchDataAsyncThunk from './fetchDataAsyncThunk';
import { DataOfSearchingParams } from './fetchDataAsyncThunk';
import actionsResultOfSearching from './resultOfSearchingSlice';

interface InitialState {
    range: {
        startIndex: number,
        maxResults : number,
    },
    statusOfLoading: string,
    statusOfError: string,
    searchParams: DataOfSearchingParams,
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

const dataOfSearchingSlice = createSlice({
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
        updateList() {}
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataAsyncThunk.pending, (state) => {
            state.statusOfLoading = 'pending';
            state.statusOfError = '';
        })
        .addCase(fetchDataAsyncThunk.fulfilled, (state, { payload }) => {
            const { searchParams, startIndex } = payload;
            state.statusOfLoading = 'fulfilled';
            state.range.startIndex = startIndex;
            
            state.searchParams = searchParams;
        })
        .addCase(fetchDataAsyncThunk.rejected, (state, { payload }) => {
            state.statusOfLoading = 'rejected';
            state.statusOfError = payload?.error.toString();
        } )
    }
});

export const actionsDataOfSearching = dataOfSearchingSlice.actions;

export default dataOfSearchingSlice.reducer;