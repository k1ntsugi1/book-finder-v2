import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import SpinnerOfLoading from '../components/SpinnerOfLoading';
import Loader from '../components/mainField/Loader';
import CardList from '../components/mainField/CardList';
import ErrorOfSearching from '../components/mainField/ErrorOfSearching';

import { useAppSelector } from '../store/hooks';

const ResultOfSearchingPage: React.FC<{ typeOfItems: string }> = (props) => {
  const { typeOfItems } = props;
  const {
    range: { maxResults },
    statusOfLoading,
    typeOfError
  } = useAppSelector((store) => store.dataOfSearchedItems);
  const { totalItems } = useAppSelector((store) => store.dataOfSearchedItems);
  const { t } = useTranslation();

  const message =
    typeOfError === 'network'
      ? t('mainField.errorOfSearching.networkError')
      : t('mainField.errorOfSearching.unknownError');

  useEffect(() => {
    if (totalItems > 0) {
      toast(t('paginationInfo'), {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    }
  }, []);

  return (
    <>
      {statusOfLoading === 'fulfilled' && <CardList typeOfItems={typeOfItems} />}
      {statusOfLoading === 'fulfilled' && totalItems > maxResults && <Loader />}
      {statusOfLoading === 'pending' && <SpinnerOfLoading />}
      {statusOfLoading === 'rejected' && <ErrorOfSearching message={message} />}
    </>
  );
};

export default memo(ResultOfSearchingPage);
