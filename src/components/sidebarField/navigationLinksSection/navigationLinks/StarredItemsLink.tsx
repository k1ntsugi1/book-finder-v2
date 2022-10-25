import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";
import fetchGetDataByStarredItemsIDs from "../../../../store/asyncThunks/fetchGetDataByStarredItemsIDs";

import StarSVGElement from "../../../SVGElements/star/StarSVGElement";
import StarFillSVGElement from "../../../SVGElements/star/StarFillSVGElement";

import { INavigationLinksProps } from "../interfaces";

const StarredItemsLink: React.FC<INavigationLinksProps> = (props) => {

    const { classnamesOfSidebarElement, setNewTypeOfItems } = props;

    const { activePage } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div
            className={classnamesOfSidebarElement}
            style={{ 'color': 'var(--color-text)' }}
            onClick={() => {
                setNewTypeOfItems!('starred');
                appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'star' }));
                appDispatch(fetchGetDataByStarredItemsIDs());
                navigate("/starred");
            }}
        >
            {activePage === 'star'
                ? <StarFillSVGElement width="25" height="25"/>
                : <StarSVGElement width="25" height="25"/>
            }
        </div>
    )
}

export default StarredItemsLink;