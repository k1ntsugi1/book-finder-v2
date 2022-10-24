import { actionsUiProgressBar } from "../store/slices/uiProgressBar";
import { AppDispatch } from "../store";

interface IScrollHandler {
    (
      element: HTMLElement,
      appDispatch: AppDispatch,
    ): void
}

const scrollHandler:IScrollHandler = (element, appDispatch) => {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = element.scrollHeight;
    const scrollTop = element.scrollTop + element.clientHeight;
    appDispatch(actionsUiProgressBar.updatepPercentOfFilling({ percentOfFilling: ((scrollTop - clientHeight) / (scrollHeight - clientHeight)) * 100 }))
};

export default scrollHandler