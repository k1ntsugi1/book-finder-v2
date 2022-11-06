import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import { ReactComponent as Search } from '../../../../assets/svg/search-heart.svg';
import { ReactComponent as SearchFill } from '../../../../assets/svg/search-heart-fill.svg';

import { ISettingItemsProps } from "../interfaces";

const SearchItem: React.FC<ISettingItemsProps> = (props) => {

    const { className } = props;

    const appDispatch = useAppDispatch();

    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    
    return (
        <div
            className={className}
            onClick={() => {
                activeItemOfOptions === 'search'
                    ? appDispatch(actionsUiActiveSectionOfSidebar.removeActiveItemOfOptions())
                    : appDispatch(actionsUiActiveSectionOfSidebar.setActiveItemOfOptions({ item: 'search' }));
            }}
        >
            {activeItemOfOptions === 'search'
                ? <SearchFill width="25" height="25"/>
                : <Search width="25" height="25"/>
            }
        </div>
    )
};

export default SearchItem;