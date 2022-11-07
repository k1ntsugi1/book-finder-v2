import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
interface IInitialState {
  message: string;
  type: string;
  statusOfVisibility: string;
}

const initialState: IInitialState = {
  message: '',
  type: 'success',
  statusOfVisibility: 'unvisible'
};

const uiNotificationSlice = createSlice({
  name: 'Ui notification',
  initialState,
  reducers: {
    show(state, action: PayloadAction<{ [key: string]: string }>) {
      uiNotificationSlice.caseReducers.hide(state);
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
      state.statusOfVisibility = 'visible';
    },
    hide(state) {
      state.statusOfVisibility = 'unvisible';
    }
  }
});

export const actionsUiNotification = uiNotificationSlice.actions;

export default uiNotificationSlice.reducer;
