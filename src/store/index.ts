import { configureStore } from '@reduxjs/toolkit';

import dataOfSearchingOptionsReducer from './slices/dataOfSearchingOptionsSlice';
import dataOfStarredItemsReducer from './slices/dataOfStarredItemsSlice';
import resultOfSearchingBySearchingOptionsReducer from './slices/resultOfSearchingBySearchingOptionsSlice';

import uiProgressBarReducer from './slices/uiProgressBarSlice';
import uiActiveSectionOfSidebarReducer from './slices/uiActiveSectionOfSidebarSlice';
import uiNotificationSliceReducer from './slices/uiNotificationSlice';

const store = configureStore({
    reducer: {
        dataOfSearchingOptions: dataOfSearchingOptionsReducer,
        dataOfStarredItems: dataOfStarredItemsReducer,
        resultOfSearchingBySearchingOptions: resultOfSearchingBySearchingOptionsReducer,

        uiProgressBar: uiProgressBarReducer,
        uiActiveSectionOfSidebar: uiActiveSectionOfSidebarReducer,
        uiNotificationSlice: uiNotificationSliceReducer, 
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;