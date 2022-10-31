import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from 'lodash';
import { ParsedItem } from '../../utils/parseResponseItems'
import fetchGetDataByStarredItemsIDs from '../asyncThunks/fetchGetDataByStarredItemsIDs';


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

const dataOfStarredItemsSlice = createSlice({
    name: 'data of starred items',
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
        .addCase(fetchGetDataByStarredItemsIDs.pending, (state) => {
            state.statusOfLoading = 'pending';
            state.statusOfError = '';
        })
        .addCase(fetchGetDataByStarredItemsIDs.fulfilled, (state, { payload }) => {
            state.statusOfLoading = 'fulfilled';
            const { items } = payload;
            state.entities = {...state.entities, ...items.reduce((acc: { [key: string]: ParsedItem}, item) => {
                acc[item.id] = item;
                return acc;
            }, {})};
        })
        .addCase(fetchGetDataByStarredItemsIDs.rejected, (state) => {
            state.statusOfLoading = 'rejected';
        })
    }
});




export const actionsDataOfStarredItems = dataOfStarredItemsSlice.actions;

export default dataOfStarredItemsSlice.reducer;

