import { createSlice, createEntityAdapter, PayloadAction  } from "@reduxjs/toolkit";

import { RootState } from "../index";

import fetchDataBySearchingOptions from '../asyncThunks/fetchGetDataBySearchingOptions';
import { actionsDataOfSearchingOptions } from './dataOfSearchingOptionsSlice';

import { ParsedItem } from '../../helpersFunc/parseResponseItems'

interface IInitialState {
    totalItems: number
    activeItemId: string | null
}

const entityAdapterOfResult = createEntityAdapter<ParsedItem>();

const initialState: IInitialState = {
    totalItems: 0,
    activeItemId: null,
}

const resultOfSearchingBySearchingOptionsSlice = createSlice({
    name: 'result of searching',
    initialState: entityAdapterOfResult.getInitialState(initialState),
    reducers: {
        removeItems(state) {
            state.totalItems = 0;
            entityAdapterOfResult.removeAll(state);
        },
        setActiveItem(state, action: PayloadAction<{id: string}>) {
            state.activeItemId = action.payload.id;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataBySearchingOptions.fulfilled, (state, { payload }) => {
            const { items, totalItems, isNewRequest } = payload;
            
            if (isNewRequest) resultOfSearchingBySearchingOptionsSlice.caseReducers.removeItems(state);
            
            state.totalItems = totalItems;
            entityAdapterOfResult.upsertMany(state, items);
        })
        .addCase(actionsDataOfSearchingOptions.resetParams, (state) => {
            resultOfSearchingBySearchingOptionsSlice.caseReducers.removeItems(state);
        })
    }
});

export const selectorsResultOfSearching = entityAdapterOfResult.getSelectors<RootState>(store => store.resultOfSearchingBySearchingOptions);

export const actionsResultOfSearching = resultOfSearchingBySearchingOptionsSlice.actions;

export default resultOfSearchingBySearchingOptionsSlice.reducer;