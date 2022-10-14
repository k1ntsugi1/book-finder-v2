import { actionsUiValueOfScroll } from "../store/uiValueOfScrollSlice";
import { AppDispatch } from "../store";
import { DataOfSearchingParams } from "../store/fetchDataAsyncThunk";
import fetchDataAsyncThunk from "../store/fetchDataAsyncThunk";

interface IScrollHandler {
    (
      element: HTMLElement,
      appDispatch: AppDispatch,
      searchParams: DataOfSearchingParams  
    ): void
}

const scrollHandler:IScrollHandler = (element, appDispatch, searchParams) => {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = element.scrollHeight;
    const scrollTop = element.scrollTop + element.clientHeight;
    appDispatch(actionsUiValueOfScroll.updateHeight({ heightOfColumn: ((scrollTop - clientHeight) / (scrollHeight - clientHeight)) * 100 }))
    if (scrollHeight - scrollTop < 20) {
        appDispatch(fetchDataAsyncThunk(searchParams));
    }
};

export default scrollHandler