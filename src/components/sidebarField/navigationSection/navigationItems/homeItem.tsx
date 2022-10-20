import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveElementsOfSidebar } from "../../../../store/uiActiveElementsOfSidebar";

import { INavigationItemsProps } from "../interfaces";

const HomeItem: React.FC<INavigationItemsProps> = (props) => {
    const { classnamesOfSidebarElement } = props;

    const { activePage } = useAppSelector(store => store.uiActiveElementsOfSidebar);
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    
    return (
        <div
            className={classnamesOfSidebarElement}
            style={{ 'color': 'var(--color-text)' }}
            onClick={() => {
                appDispatch(actionsUiActiveElementsOfSidebar.setActivePage({ page: 'home' }));
                navigate("/");
            }}
        >
            {activePage === 'home'
                ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                </svg>
            }
        </div>
    )
}

export default HomeItem;