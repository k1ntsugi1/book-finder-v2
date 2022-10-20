import { configureStore } from '@reduxjs/toolkit';

import dataOfSearchingReducer from './dataOfSearchingSlice';
import dataOfStaredItemsReducer from './dataOfStaredItemsSlice';
import resultOfSearchingReducer from './resultOfSearchingSlice';

import uiValueOfScrollReducer from './uiValueOfScrollSlice';
import uiActiveElementsOfSidebarReducer from './uiActiveElementsOfSidebar';
import uiNotificationSliceReducer from './uiNotificationSlice';

const store = configureStore({
    reducer: {
        dataOfSearching: dataOfSearchingReducer,
        resultOfSearching: resultOfSearchingReducer,
        dataOfStaredItems: dataOfStaredItemsReducer,
        uiValueOfScroll: uiValueOfScrollReducer,
        uiActiveElementsOfSidebar: uiActiveElementsOfSidebarReducer,
        uiNotificationSlice: uiNotificationSliceReducer, 
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;