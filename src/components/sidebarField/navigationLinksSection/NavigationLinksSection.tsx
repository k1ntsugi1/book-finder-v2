import HomeLink from './navigationLinks/HomeLink';
import ResultOfSearchingLink from './navigationLinks/ResultOfSearchingLink';
import ViewableItemLink from './navigationLinks/ViewableItemLink';
import StarredItemLink from './navigationLinks/StarredItemsLink';


const NavigationLinksSection: React.FC<{setNewTypeOfItems: (type: string) => void, classnamesOfSidebarElement: string}> = (props) => {
    const { setNewTypeOfItems, classnamesOfSidebarElement } = props;
    return (
        <section className="mx-auto">
            <HomeLink classnamesOfSidebarElement={classnamesOfSidebarElement}/>
            <ResultOfSearchingLink classnamesOfSidebarElement={classnamesOfSidebarElement} setNewTypeOfItems={setNewTypeOfItems}/>
            <ViewableItemLink classnamesOfSidebarElement={classnamesOfSidebarElement}/>
            <StarredItemLink classnamesOfSidebarElement={classnamesOfSidebarElement} setNewTypeOfItems={setNewTypeOfItems}/>
        </section>
    )
};

export default NavigationLinksSection