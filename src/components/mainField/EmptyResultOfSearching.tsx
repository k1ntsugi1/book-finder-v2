import { useTranslation } from 'react-i18next';

import InformationCard from '../informationCard/InformationCard';

import { ReactComponent as EmojiFrown } from '../../assets/svg/emoji-frown.svg';

const EmptyResultOfSearching: React.FC = () => {
  const { t } = useTranslation();

  return (
    <InformationCard
      className="border-color-body shadow-primary"
      message={t('mainField.emptyResult')}
    >
      <EmojiFrown width="25" height="25" />
    </InformationCard>
  );
};

export default EmptyResultOfSearching;
