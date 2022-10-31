import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import SearchSVGElement from "../../../SVGElements/search/SearchSVGElement";
import SearchFillSVGElement from "../../../SVGElements/search/SearchFIllSVGElement";

import { ISettingItemsProps } from "../interfaces";

const SearchItem: React.FC<ISettingItemsProps> = (props) => {
    const { classnamesOfSidebarElement } = props;
    const appDispatch = useAppDispatch();
    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    return (
        <div
            className={classnamesOfSidebarElement}
            onClick={() => {
                activeItemOfOptions === 'search'
                    ? appDispatch(actionsUiActiveSectionOfSidebar.removeActiveItemOfOptions())
                    : appDispatch(actionsUiActiveSectionOfSidebar.setActiveItemOfOptions({ item: 'search' }));
            }}
        >
            {activeItemOfOptions === 'search'
                ? <SearchFillSVGElement width="25" height="25"/>
                : <SearchSVGElement width="25" height="25"/>
            }
        </div>
    )
};

export default SearchItem;