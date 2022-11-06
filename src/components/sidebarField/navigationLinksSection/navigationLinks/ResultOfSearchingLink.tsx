import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import { ReactComponent as BookMarks } from '../../../../assets/svg/bookmarks.svg';
import { ReactComponent as BookMarksFill } from '../../../../assets/svg/bookmarks-fill.svg';

import { INavigationLinksProps } from "../interfaces";

const ResultOfSearchingLink: React.FC<INavigationLinksProps> = (props) => {
    
    const { className, setNewTypeOfItems } = props;

    const { activePage } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    const { totalItems } = useAppSelector(store => store.dataOfSearchedItems)

    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const notify = () => {
        toast('🦄 Google book API отдает при пагинации разные "total items". Пагинация через цифры реализована из-за интереса', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <div
            className={className}
            onClick={() => {
                appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'result' }));
                setNewTypeOfItems!('default');
                navigate("/result");
                if (totalItems > 0) notify();
            }}
        >
            {activePage === 'result'
                ? <BookMarksFill width="25" height="25"/>
                : <BookMarks width="25" height="25"/>
            }
        </div>
    )
}

export default ResultOfSearchingLink;