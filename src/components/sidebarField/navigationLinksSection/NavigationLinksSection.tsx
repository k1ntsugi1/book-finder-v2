import HomeLink from './navigationLinks/HomeLink';
import ResultOfSearchingLink from './navigationLinks/ResultOfSearchingLink';
import ViewableItemLink from './navigationLinks/ViewableItemLink';
import StarredItemLink from './navigationLinks/StarredItemsLink';

import { INavigationLinksProps } from './interfaces';

const NavigationLinksSection: React.FC<INavigationLinksProps> = (props) => {
  const { className } = props;

  return (
    <section className="mt-4 mx-auto">
      <HomeLink className={className} />

      <ResultOfSearchingLink className={className} />

      <ViewableItemLink className={className} />

      <StarredItemLink className={className} />
    </section>
  );
};

export default NavigationLinksSection;
