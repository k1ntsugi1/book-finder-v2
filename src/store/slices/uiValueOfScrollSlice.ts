import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import fetchDataAsyncThunk from "../fetchDataAsyncThunk";

const uiValueOfScrollSlice = createSlice({
    name: 'value of scroll',
    initialState: {
        heightOfColumn: 0
    },
    reducers: {
        updateHeight(state, action: PayloadAction<{heightOfColumn: number}>) {
            state.heightOfColumn = action.payload.heightOfColumn;
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(fetchDataAsyncThunk.fulfilled, (state) => {
    //         const heightOfColumn = state.heightOfColumn + 1;
    //         uiValueOfScrollSlice.caseReducers.updateHeight(state, {type: 'updateHeight', payload: {heightOfColumn}});
    //     })
    // }
});

export const actionsUiValueOfScroll = uiValueOfScrollSlice.actions;

export default uiValueOfScrollSlice.reducer;