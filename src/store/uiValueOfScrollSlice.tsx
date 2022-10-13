import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const uiValueOfScrollSlice = createSlice({
    name: 'value of scroll',
    initialState: {
        heightOfColumn: 0
    },
    reducers: {
        updateHeight(state, action: PayloadAction<{heightOfColumn: number}>) {
            state.heightOfColumn = action.payload.heightOfColumn;
        }
    }
});

export const actionsUiValueOfScroll = uiValueOfScrollSlice.actions;

export default uiValueOfScrollSlice.reducer;