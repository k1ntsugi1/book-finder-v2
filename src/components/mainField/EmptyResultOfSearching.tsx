import { useTranslation } from 'react-i18next';

import SmallInformationCard from '../SmallInformationCard';

import { ReactComponent as EmojiFrown } from '../../assets/svg/emoji-frown.svg';

const EmptyResultOfSearching: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SmallInformationCard
      className="border-primary shadow-primary"
      message={t('mainField.emptyResult')}
    >
      <EmojiFrown width="25" height="25" />
    </SmallInformationCard>
  );
};

export default EmptyResultOfSearching;
