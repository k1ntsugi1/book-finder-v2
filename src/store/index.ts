import { configureStore } from '@reduxjs/toolkit';

import dataOfSearchingReducer from './dataOfSearching';
import resultOfSearchingReducer from './resultOfSearchingSlice';
import uiValueOfScrollReducer from './uiValueOfScrollSlice';
const store = configureStore({
    reducer: {
        dataOfSearching: dataOfSearchingReducer,
        resultOfSearching: resultOfSearchingReducer,
        uiValueOfScroll: uiValueOfScrollReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;