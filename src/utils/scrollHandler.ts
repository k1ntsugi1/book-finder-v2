import { actionsUiProgressBar } from '../store/slices/uiProgressBarSlice';
import { AppDispatch } from '../store';

interface IScrollHandler {
  (element: HTMLElement, appDispatch: AppDispatch): void;
}

const scrollHandler: IScrollHandler = (element, appDispatch) => {
  const clientHeight = document.documentElement.clientHeight;
  const scrollHeight = element.scrollHeight;
  const scrollTop = element.scrollTop + element.clientHeight;
  const percentOfFilling =
    scrollHeight - clientHeight > 0
      ? ((scrollTop - clientHeight) / (scrollHeight - clientHeight)) * 100
      : 0;
  appDispatch(actionsUiProgressBar.updatepPercentOfFilling({ percentOfFilling }));
};

export default scrollHandler;
