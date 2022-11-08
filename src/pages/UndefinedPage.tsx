import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import InformationCard from '../components/informationCard/InformationCard';
import { actionsUiActiveSectionOfSidebar } from '../store/slices/uiActiveSectionOfSidebarSlice';

import { ReactComponent as EmojiFrown } from '../assets/svg/emoji-frown.svg';
const UndefinedPage: React.FC = () => {
  const { t } = useTranslation();
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClickHandler = () => {
    appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: 'home' }));
    navigate('/');
  };
  return (
    <InformationCard message={t('undefinedPage.message')} onClick={onClickHandler}>
      <EmojiFrown width="25" height="25" />
    </InformationCard>
  );
};

export default UndefinedPage;
