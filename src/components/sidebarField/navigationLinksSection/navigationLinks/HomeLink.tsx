import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { actionsUiActiveSectionOfSidebar } from '../../../../store/slices/uiActiveSectionOfSidebarSlice';

import { ReactComponent as House } from '../../../../assets/svg/house.svg';
import { ReactComponent as HouseFill } from '../../../../assets/svg/house-fill.svg';

import { INavigationLinksProps } from '../interfaces';

const HomeLink: React.FC<INavigationLinksProps> = (props) => {
  const { className } = props;

  const { activePage } = useAppSelector((store) => store.uiActiveSectionOfSidebar);

  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={className}
      onClick={() => {
        appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'home' }));
        navigate('/');
      }}
    >
      {activePage === 'home' ? (
        <HouseFill width="25" height="25" />
      ) : (
        <House width="25" height="25" />
      )}
    </div>
  );
};

export default HomeLink;
