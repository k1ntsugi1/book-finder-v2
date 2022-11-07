import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { actionsUiActiveSectionOfSidebar } from '../../../../store/slices/uiActiveSectionOfSidebarSlice';

import { ReactComponent as Book } from '../../../../assets/svg/book.svg';
import { ReactComponent as BookFill } from '../../../../assets/svg/book-fill.svg';

import { INavigationLinksProps } from '../interfaces';

const ViewableItemLink: React.FC<INavigationLinksProps> = (props) => {
  const { className } = props;

  const { activePage } = useAppSelector((store) => store.uiActiveSectionOfSidebar);

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={className}
      onClick={() => {
        appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'item' }));
        navigate('/item');
      }}
    >
      {activePage === 'item' ? (
        <BookFill width="25" height="25" />
      ) : (
        <Book width="25" height="25" />
      )}
    </div>
  );
};

export default ViewableItemLink;
