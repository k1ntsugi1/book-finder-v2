import InformationCard from '../informationCard/InformationCard';

import { ReactComponent as EmojiFrown } from '../../assets/svg/emoji-frown.svg';

const ErrorOfSearching: React.FC<{ message: string }> = ({ message }) => {
  return (
    <InformationCard className="border-danger shadow-danger" message={message}>
      <EmojiFrown width="25" height="25" />
    </InformationCard>
  );
};

export default ErrorOfSearching;
