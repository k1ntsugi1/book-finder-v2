import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    message: string,
    type: string,
    statusOfVisibility: string
}

const initialState: IInitialState = {
    message: '',
    type: 'success',
    statusOfVisibility: 'unvisible',
}

const uiNotificationSlice = createSlice({
    name: 'ui notification',
    initialState,
    reducers: {
        show(state, action: PayloadAction<IInitialState>) {
            const { message, type, statusOfVisibility } = action.payload;
            state.message = message;
            state.type = type;
            state.statusOfVisibility = statusOfVisibility;
        },
        hide(state) {
            state.statusOfVisibility = 'unvisible';
        }
    }
});


export const actionsUiNotification = uiNotificationSlice.actions;

export default uiNotificationSlice.reducer;