import { configureStore } from '@reduxjs/toolkit';

import dataOfSearchingReducer from './dataOfSearching';
import resultOfSearchingReducer from './resultOfSearchingSlice';
const store = configureStore({
    reducer: {
        dataOfSearching: dataOfSearchingReducer,
        resultOfSearching: resultOfSearchingReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;