import { configureStore } from '@reduxjs/toolkit';

import dataOfStarredItemsReducer from './slices/dataOfStarredItemsSlice';
import dataOfSearchedItemsReducer from './slices/dataOfSearchedItemsSlice';

import uiProgressBarReducer from './slices/uiProgressBarSlice';
import uiActiveSectionOfSidebarReducer from './slices/uiActiveSectionOfSidebarSlice';
import uiNotificationSliceReducer from './slices/uiNotificationSlice';

const store = configureStore({
    reducer: {
        //dataOfSearchingOptions: dataOfSearchingOptionsReducer,
        dataOfSearchedItems: dataOfSearchedItemsReducer,
        dataOfStarredItems: dataOfStarredItemsReducer,
        
        uiProgressBar: uiProgressBarReducer,
        uiActiveSectionOfSidebar: uiActiveSectionOfSidebarReducer,
        uiNotificationSlice: uiNotificationSliceReducer, 
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;