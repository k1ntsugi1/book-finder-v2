import { createSlice } from "@reduxjs/toolkit";
import fetchDataAsyncThunk from './fetchDataAsyncThunk';
import { DataOfSearchingParams } from './fetchDataAsyncThunk';

interface InitialState {
    range: {
        startIndex: number,
        maxResults : number,
    },
    totalItems: number,
    statusOfLoading: string,
    statusOfRequest: string,
    statusOfError: string,
    searchParams: DataOfSearchingParams,
};


const initialState: InitialState  = {
    range: {
        startIndex: 0,
        maxResults: 30,
    },
    totalItems: 0,
    statusOfLoading: '',
    statusOfError: '',
    statusOfRequest: 'new',
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
        resetParams(state) {
            state.range.startIndex = 0;
            state.totalItems = 0;
            state.statusOfRequest = 'new';
            state.statusOfLoading = '';
            state.statusOfError = '';
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataAsyncThunk.pending, (state) => {
            state.statusOfLoading = 'pending';
            state.statusOfError = '';
        })
        .addCase(fetchDataAsyncThunk.fulfilled, (state, { payload }) => {
            const { searchParams, totalItems, startIndex, statusOfRequest } = payload;
            state.statusOfLoading = 'fulfilled';
            state.totalItems = totalItems;
            state.statusOfRequest = statusOfRequest === 'new' ? 'old': 'new';
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