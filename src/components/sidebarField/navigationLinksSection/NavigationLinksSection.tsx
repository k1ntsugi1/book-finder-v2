import HomeLink from './navigationLinks/HomeLink';
import ResultOfSearchingLink from './navigationLinks/ResultOfSearchingLink';
import ViewableItemLink from './navigationLinks/ViewableItemLink';
import StarredItemLink from './navigationLinks/StarredItemsLink';

import { INavigationLinksProps } from './interfaces';

const NavigationLinksSection: React.FC<INavigationLinksProps> = (props) => {
  const { setNewTypeOfItems, className } = props;

  return (
    <section className="mt-4 mx-auto">
      <HomeLink className={className} />

      <ResultOfSearchingLink className={className} setNewTypeOfItems={setNewTypeOfItems} />

      <ViewableItemLink className={className} />

      <StarredItemLink className={className} setNewTypeOfItems={setNewTypeOfItems} />
    </section>
  );
};

export default NavigationLinksSection;
