import { createSlice, createEntityAdapter, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../index';

import fetchGetDataBySearchingOptions from '../asyncThunks/fetchGetDataBySearchingOptions';

import { ParsedItem } from '../../utils/parseResponseItems';

import { IDataOfSearchingParams } from '../asyncThunks/interfaces';

interface IInitialState {
  totalItems: number;
  activeItemId: string | null;
  range: {
    startIndex: number;
    maxResults: number;
  };
  statusOfLoading: string;
  typeOfError: string;
  searchParams: IDataOfSearchingParams;
}

const entityAdapterOfResult = createEntityAdapter<ParsedItem>();

const initialState: IInitialState = {
  totalItems: 0,
  activeItemId: null,
  range: {
    startIndex: 0,
    maxResults: 30
  },
  statusOfLoading: 'fulfilled',
  typeOfError: '',
  searchParams: {
    currentNameOfItem: '',
    currentAuthorOfItem: '',
    currentTypeOfCategory: 'all',
    currentTypeOfOrder: 'relevance',
    currentTypeOfItem: 'books',
    currentTypeOfFilter: 'full'
  }
};

const dataOfSearchedItemsSlice = createSlice({
  name: 'data of searched items',
  initialState: entityAdapterOfResult.getInitialState(initialState),
  reducers: {
    removeItems(state) {
      state.totalItems = 0;
      entityAdapterOfResult.removeAll(state);
    },
    setActiveItem(state, action: PayloadAction<{ id: string }>) {
      state.activeItemId = action.payload.id;
    },
    decreaseStartIndexOnMaxResultsValue(state) {
      state.range.startIndex = state.range.startIndex - 2 * state.range.maxResults;
    },
    updateStartIndexByPaginationNum(state, actions: PayloadAction<{ num: number }>) {
      state.range.startIndex = state.range.maxResults * actions.payload.num;
    },
    resetSearchParams(state) {
      state.range.startIndex = 0;
      state.statusOfLoading = '';
      state.typeOfError = '';
      state.searchParams = initialState.searchParams;
      dataOfSearchedItemsSlice.caseReducers.removeItems(state);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetDataBySearchingOptions.pending, (state) => {
        state.statusOfLoading = 'pending';
        state.typeOfError = '';
      })
      .addCase(fetchGetDataBySearchingOptions.fulfilled, (state, { payload }) => {
        const { items, totalItems, isNewRequest, searchParams, startIndex } = payload;

        state.statusOfLoading = 'fulfilled';
        state.range.startIndex = startIndex;
        state.searchParams = searchParams;

        if (isNewRequest) dataOfSearchedItemsSlice.caseReducers.removeItems(state);

        state.totalItems = totalItems;
        entityAdapterOfResult.upsertMany(state, items);
      })
      .addCase(fetchGetDataBySearchingOptions.rejected, (state, { payload }) => {
        state.statusOfLoading = 'rejected';
        const typeOfError = payload?.error.toString().includes('Network') ? 'network' : 'unknown';
        state.typeOfError = typeOfError;
      });
  }
});

export const selectorsDataOfSearchedItems = entityAdapterOfResult.getSelectors<RootState>(
  (store) => store.dataOfSearchedItems
);

export const actionsDataOfSearchedItems = dataOfSearchedItemsSlice.actions;

export default dataOfSearchedItemsSlice.reducer;
