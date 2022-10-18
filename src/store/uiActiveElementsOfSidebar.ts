import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    activePage: string
    activeItemOfOptions: string | null
}

const initialState: IInitialState = {
    activePage: 'home',
    activeItemOfOptions: null
}


const uiActiveElementsOfSidebarSlice = createSlice({
    name: 'active page',
    initialState,
    reducers: {
        setActivePage(state, action: PayloadAction<{page: string}>) {
            state.activePage = action.payload.page
        },
        setActiveItemOfOptions(state, action: PayloadAction<{item: string}>) {
            state.activeItemOfOptions = action.payload.item
        },
        removeActiveItemOfOptions(state) {
            state.activeItemOfOptions = null;
        }
    }
});


export const actionsUiActiveElementsOfSidebar = uiActiveElementsOfSidebarSlice.actions;

export default uiActiveElementsOfSidebarSlice.reducer;