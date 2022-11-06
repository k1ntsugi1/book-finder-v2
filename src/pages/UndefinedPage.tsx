import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import GlassElement from "../components/GlassElement";
import { actionsUiActiveSectionOfSidebar } from "../store/slices/uiActiveSectionOfSidebarSlice";

import { ReactComponent as EmojiFrown } from '../assets/svg/emoji-frown.svg'
const UndefinedPage: React.FC = () => {
    const appDispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <GlassElement
            className='color-text align-self-center border rounded'
            style={{
                'width': '200px',
                'height': '100px',
            }}
        >
            <div className="h-100 centered-content flex-column border rounded">
                <div>
                    <EmojiFrown width="25" height="25" />
                    <span className="ps-3">Страница не найдена</span>
                </div>
                <span
                    className="cursor-pointer text-decoration-underline"
                    onClick={() => {
                        appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'home' }));
                        navigate('/');
                    }}
                >
                    Перейти на главную страницу
                </span>
            </div>
        </GlassElement>
    )
};

export default UndefinedPage;