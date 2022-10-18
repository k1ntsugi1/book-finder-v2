import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from 'lodash';
import { ParsedItem } from '../helpersFunc/parseResponseItems'
import fetchDataofStaredItems from './fetchDataOfStaredItems';

// const entityAdapterOfStaredItems = createEntityAdapter<{ids: string[]}>();

interface IInitialState {
    statusOfLoading: string,
    statusOfError: string,
    ids: string[],
    entities: {
        [key: string]: ParsedItem 
    }
}

const initialState: IInitialState = {
    statusOfLoading: '',
    statusOfError: '',
    ids: JSON.parse(localStorage.getItem('staredItems') ?? JSON.stringify([])),
    entities: {

    }
}

type Payload = PayloadAction<{id: string}>;

const dataOfStaredItemsSlice = createSlice({
    name: 'data of stared items',
    initialState: initialState,
    reducers: {
        addItem(state, action: Payload) {
            const { id } = action.payload;
            state.ids.push(id);
        },
        removeItem(state, action: Payload) {
            const { id } = action.payload;
            state.ids = _.without(state.ids, id);
            state.entities = _.omit(state.entities, id);
        },
        removeItems(state) {
            state.entities = {};
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataofStaredItems.pending, (state) => {
            state.statusOfLoading = 'pending';
            state.statusOfError = '';
        })
        .addCase(fetchDataofStaredItems.fulfilled, (state, { payload }) => {
            state.statusOfLoading = 'fulfilled';
            const { items } = payload;
            state.entities = {...state.entities, ...items.reduce((acc: { [key: string]: ParsedItem}, item) => {
                acc[item.id] = item;
                return acc;
            }, {})};
        })
        .addCase(fetchDataofStaredItems.rejected, (state) => {
            state.statusOfLoading = 'rejected';
        })
    }
});




export const actionsDataOfStaredItems = dataOfStaredItemsSlice.actions;

export default dataOfStaredItemsSlice.reducer;

