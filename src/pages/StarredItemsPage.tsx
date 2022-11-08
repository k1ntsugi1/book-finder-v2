import { useTranslation } from 'react-i18next';

import CardList from '../components/mainField/CardList';
import SpinnerOfLoading from '../components/SpinnerOfLoading';
import ErrorOfSearching from '../components/mainField/ErrorOfSearching';

import { useAppSelector } from '../store/hooks';

const StarredItemsPage: React.FC = () => {
  const { t } = useTranslation();
  const { statusOfLoading, typeOfError } = useAppSelector((store) => store.dataOfStarredItems);
  const starredItems = useAppSelector((store) => store.dataOfStarredItems.entities);
  const message =
    typeOfError === 'network'
      ? t('mainField.errorOfSearching.networkError')
      : t('mainField.errorOfSearching.unknownError');

  return (
    <>
      <CardList statusOfLoading={statusOfLoading} items={starredItems} />

      {statusOfLoading === 'rejected' && <ErrorOfSearching message={message} />}
    </>
  );
};

export default StarredItemsPage;
