import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const uiProgressBar = createSlice({
    name: 'value of scroll',
    initialState: {
        percentOfFilling: 0,
        typeOfProgressBar: 'straight',
    },
    reducers: {
        updatepPercentOfFilling(state, action: PayloadAction<{percentOfFilling: number}>) {
            state.percentOfFilling = action.payload.percentOfFilling;
        },
        updateTypeOfProgressBar(state, action: PayloadAction<{typeOfProgressBar: string}>) {
            state.typeOfProgressBar = action.payload.typeOfProgressBar;
        }
    },
});

export const actionsUiProgressBar = uiProgressBar.actions;

export default uiProgressBar.reducer;