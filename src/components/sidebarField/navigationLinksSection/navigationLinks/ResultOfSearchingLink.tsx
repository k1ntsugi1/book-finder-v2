import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { actionsUiActiveSectionOfSidebar } from '../../../../store/slices/uiActiveSectionOfSidebarSlice';

import { ReactComponent as BookMarks } from '../../../../assets/svg/bookmarks.svg';
import { ReactComponent as BookMarksFill } from '../../../../assets/svg/bookmarks-fill.svg';

import { INavigationLinksProps } from '../interfaces';

const ResultOfSearchingLink: React.FC<INavigationLinksProps> = (props) => {
  const { className, setNewTypeOfItems } = props;

  const { activePage } = useAppSelector((store) => store.uiActiveSectionOfSidebar);

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={className}
      onClick={() => {
        appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'result' }));
        setNewTypeOfItems!('searched');
        navigate('/result');
      }}
    >
      {activePage === 'result' ? (
        <BookMarksFill width="25" height="25" />
      ) : (
        <BookMarks width="25" height="25" />
      )}
    </div>
  );
};

export default ResultOfSearchingLink;
