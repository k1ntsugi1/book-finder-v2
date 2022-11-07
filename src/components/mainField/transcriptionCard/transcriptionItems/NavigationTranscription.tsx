import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../../store/hooks';
import { actionsUiActiveSectionOfSidebar } from '../../../../store/slices/uiActiveSectionOfSidebarSlice';

import RunnerBorderBottom from '../../../RunnerBorderBottom';

import { ReactComponent as House } from '../../../../assets/svg/house.svg';
import { ReactComponent as BookMarks } from '../../../../assets/svg/bookmarks.svg';
import { ReactComponent as Book } from '../../../../assets/svg/book.svg';
import { ReactComponent as Star } from '../../../../assets/svg/star.svg';
import { ReactComponent as ArrowLeftShortFill } from '../../../../assets/svg/arrow-left-short.svg';

import { IProps } from './interfaces';

const NavigationTranscription: React.FC<IProps> = (props) => {
  const { classNamesOfContainerWrapper, classNamesOfChildrenWrapper, classNamesOfSVGContainer } =
    props;

  const { t } = useTranslation();
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();

  const navigationHandler = (pathname: string) => () => {
    const mappignPathnameToPageName: { [key: string]: string } = {
      '/': 'home',
      '/result': 'result',
      '/item': 'item',
      '/starred': 'starred'
    };
    appDispatch(
      actionsUiActiveSectionOfSidebar.setActivePage({ page: mappignPathnameToPageName[pathname] })
    );
    navigate(pathname);
  };

  return (
    <div className="d-flex flex-column gap-3">
      <p className="mx-auto fw-bold h5 border-bottom">
        {t('mainField.transcriptionCard.navigation')}
      </p>

      <RunnerBorderBottom
        classNamesOfContainerWrapper={classNamesOfContainerWrapper}
        classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
      >
        <span className={classNamesOfSVGContainer}>
          <House width="25" height="25" />
          <ArrowLeftShortFill width="20" height="20" />
        </span>
        <span onClick={navigationHandler('/')}>{t('mainField.transcriptionCard.homeLink')}</span>
      </RunnerBorderBottom>

      <RunnerBorderBottom
        classNamesOfContainerWrapper={classNamesOfContainerWrapper}
        classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
      >
        <span className={classNamesOfSVGContainer}>
          <BookMarks width="25" height="25" />
          <ArrowLeftShortFill width="20" height="20" />
        </span>
        <span onClick={navigationHandler('/result')}>
          {t('mainField.transcriptionCard.resultOfSearchingLink')}
        </span>
      </RunnerBorderBottom>

      <RunnerBorderBottom
        classNamesOfContainerWrapper={classNamesOfContainerWrapper}
        classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
      >
        <span className={classNamesOfSVGContainer}>
          <Book width="25" height="25" />
          <ArrowLeftShortFill width="20" height="20" />
        </span>
        <span onClick={navigationHandler('/item')}>
          {t('mainField.transcriptionCard.viewableItemLink')}
        </span>
      </RunnerBorderBottom>

      <RunnerBorderBottom
        classNamesOfContainerWrapper={classNamesOfContainerWrapper}
        classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
      >
        <span className={classNamesOfSVGContainer}>
          <Star width="25" height="25" />
          <ArrowLeftShortFill width="20" height="20" />
        </span>
        <span onClick={navigationHandler('/starred')}>
          {t('mainField.transcriptionCard.starredItemsLink')}
        </span>
      </RunnerBorderBottom>
    </div>
  );
};

export default NavigationTranscription;
