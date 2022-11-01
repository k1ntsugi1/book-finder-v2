import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import BookSVGElement from "../../../SVGElements/book/BookSVGElement";
import BookFillSVGElement from "../../../SVGElements/book/BookFillSVGElement";

import { INavigationLinksProps } from "../interfaces";

const ViewableItemLink: React.FC<INavigationLinksProps> = (props) => {
    
    const { className } = props;

    const { activePage } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div
            className={className}
            onClick={() => {
                appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'item' }));
                navigate("/item");
            }}
        >
            {activePage === 'item'
                ? <BookFillSVGElement width="25" height="25"/>
                : <BookSVGElement width="25" height="25"/>
            }
        </div>
    )
}

export default ViewableItemLink;