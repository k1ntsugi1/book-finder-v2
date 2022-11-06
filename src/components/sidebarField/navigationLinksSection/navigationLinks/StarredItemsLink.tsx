import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";
import fetchGetDataByStarredItemsIDs from "../../../../store/asyncThunks/fetchGetDataByStarredItemsIDs";

import { ReactComponent as Star } from '../../../../assets/svg/star.svg';
import { ReactComponent as StarFill } from '../../../../assets/svg/star-fill.svg';

import { INavigationLinksProps } from "../interfaces";

const StarredItemsLink: React.FC<INavigationLinksProps> = (props) => {

    const { className, setNewTypeOfItems } = props;

    const { activePage } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div
            className={className}
            onClick={() => {
                setNewTypeOfItems!('starred');
                appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'star' }));
                appDispatch(fetchGetDataByStarredItemsIDs());
                navigate("/starred");
            }}
        >
            {activePage === 'starred'
                ? <StarFill width="25" height="25"/>
                : <Star width="25" height="25"/>
            }
        </div>
    )
}

export default StarredItemsLink;