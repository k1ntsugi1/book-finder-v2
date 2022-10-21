import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveElementsOfSidebar } from "../../../../store/slices/uiActiveElementsOfSidebarSlice";

import { INavigationItemsProps } from "../interfaces";

const ResultOfSearchingItem: React.FC<INavigationItemsProps> = (props) => {
    const { classnamesOfSidebarElement, setNewTypeOfItems } = props;

    const { activePage } = useAppSelector(store => store.uiActiveElementsOfSidebar);
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div
            className={classnamesOfSidebarElement}
            style={{ 'color': 'var(--color-text)' }}
            onClick={() => {
                appDispatch(actionsUiActiveElementsOfSidebar.setActivePage({ page: 'result' }));
                setNewTypeOfItems!('default');
                navigate("/result");
            }}
        >
            {activePage === 'result'
                ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bookmarks-fill" viewBox="0 0 16 16">
                    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z" />
                    <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z" />
                    <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z" />
                </svg>
            }
        </div>
    )
}

export default ResultOfSearchingItem;