import SearchSectionLink from './configurationLinks/SearchSectionLink';
import StylingSectionLink from './configurationLinks/SettingSectionLink';

const ConfigurationLinksSection: React.FC<{ className: string }> = (props) => {
  const { className } = props;

  return (
    <section className="mx-auto">
      <SearchSectionLink className={className} />
      <StylingSectionLink className={className} />
    </section>
  );
};

export default ConfigurationLinksSection;
