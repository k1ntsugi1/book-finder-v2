import { configureStore } from '@reduxjs/toolkit';

import dataOfSearchingReducer from './slices/dataOfSearchingSlice';
import dataOfStaredItemsReducer from './slices/dataOfStaredItemsSlice';
import resultOfSearchingReducer from './slices/resultOfSearchingSlice';

import uiValueOfScrollReducer from './slices/uiValueOfScrollSlice';
import uiActiveElementsOfSidebarReducer from './slices/uiActiveElementsOfSidebarSlice';
import uiNotificationSliceReducer from './slices/uiNotificationSlice';

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