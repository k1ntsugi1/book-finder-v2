import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveElementsOfSidebar } from "../../../../store/slices/uiActiveElementsOfSidebarSlice";

import { ISettingItemsProps } from "../interfaces";

const SearchItem: React.FC<ISettingItemsProps> = (props) => {
    const { classnamesOfSidebarElement } = props;
    const appDispatch = useAppDispatch();
    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveElementsOfSidebar);
    return (
        <div
            className={classnamesOfSidebarElement}
            style={{ 'color': 'var(--color-text)' }}
            onClick={() => {
                activeItemOfOptions === 'search'
                    ? appDispatch(actionsUiActiveElementsOfSidebar.removeActiveItemOfOptions())
                    : appDispatch(actionsUiActiveElementsOfSidebar.setActiveItemOfOptions({ item: 'search' }));
            }}
        >
            {activeItemOfOptions === 'search'
                ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search-heart-fill" viewBox="0 0 16 16">
                    <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search-heart" viewBox="0 0 16 16">
                    <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                    <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                </svg>
            }
        </div>
    )
};

export default SearchItem;