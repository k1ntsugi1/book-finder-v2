import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const uiProgressBarSlice = createSlice({
    name: 'Ui progress bar',
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

export const actionsUiProgressBar = uiProgressBarSlice.actions;

export default uiProgressBarSlice.reducer;