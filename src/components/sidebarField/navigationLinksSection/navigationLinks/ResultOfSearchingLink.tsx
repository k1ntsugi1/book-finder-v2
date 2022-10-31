import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import BookMarksSVGElement from "../../../SVGElements/bookMarks/BookMarksSVGElement";
import BookMarksFillSVGElement from "../../../SVGElements/bookMarks/BookMarksFillSVGElement";

import { INavigationLinksProps } from "../interfaces";

const ResultOfSearchingLink: React.FC<INavigationLinksProps> = (props) => {
    const { classnamesOfSidebarElement, setNewTypeOfItems } = props;

    const { activePage } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div
            className={classnamesOfSidebarElement}
            onClick={() => {
                appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'result' }));
                setNewTypeOfItems!('default');
                navigate("/result");
            }}
        >
            {activePage === 'result'
                ? <BookMarksFillSVGElement width="25" height="25"/>
                : <BookMarksSVGElement width="25" height="25"/>
            }
        </div>
    )
}

export default ResultOfSearchingLink;