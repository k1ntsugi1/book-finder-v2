import SearchSectionLink from "./configurationLinks/SearchSectionLink";
import StylingSectionLink from "./configurationLinks/SettingSectionLink";

const ConfigurationLinksSection: React.FC<{classnamesOfSidebarElement: string}> = (props) => {
    const { classnamesOfSidebarElement } = props;
    
    return (
        <section className="mx-auto">
            <SearchSectionLink classnamesOfSidebarElement={classnamesOfSidebarElement}/>
            <StylingSectionLink classnamesOfSidebarElement={classnamesOfSidebarElement}/>
        </section>
    )
};

export default ConfigurationLinksSection;