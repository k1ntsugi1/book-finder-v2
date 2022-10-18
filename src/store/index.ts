import { configureStore } from '@reduxjs/toolkit';

import dataOfSearchingReducer from './dataOfSearching';
import dataOfStaredItemsReducer from './dataOfStaredItemsSlice';
import resultOfSearchingReducer from './resultOfSearchingSlice';

import uiValueOfScrollReducer from './uiValueOfScrollSlice';
import uiActiveElementsOfSidebarReducer from './uiActiveElementsOfSidebar';

const store = configureStore({
    reducer: {
        dataOfSearching: dataOfSearchingReducer,
        resultOfSearching: resultOfSearchingReducer,
        dataOfStaredItems: dataOfStaredItemsReducer,
        uiValueOfScroll: uiValueOfScrollReducer,
        uiActiveElementsOfSidebar: uiActiveElementsOfSidebarReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;