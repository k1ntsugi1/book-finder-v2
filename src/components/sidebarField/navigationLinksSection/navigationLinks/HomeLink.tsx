import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import HomeSVGElement from "../../../SVGElements/home/HomeSVGElement";
import HomeFillSVGElement from "../../../SVGElements/home/HomeFillSVGElement";

import { INavigationLinksProps } from "../interfaces";

const HomeLink: React.FC<INavigationLinksProps> = (props) => {
    const { classnamesOfSidebarElement } = props;

    const { activePage } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    
    return (
        <div
            className={classnamesOfSidebarElement}
            onClick={() => {
                appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'home' }));
                navigate("/");
            }}
        >
            {activePage === 'home'
                ? <HomeFillSVGElement width="25" height="25"/>
                : <HomeSVGElement width="25" height="25"/>
            }
        </div>
    )
}

export default HomeLink;