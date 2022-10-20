import cn from 'classnames'

import HomeItem from './navigationItems/homeItem';
import ResultOfSearchingItem from './navigationItems/ResultOfSearchingItem';
import ActiveItem from './navigationItems/ActiveItem';
import StarredItem from './navigationItems/StarredItem';


const NavigationSection: React.FC<{setNewTypeOfItems: (type: string) => void, classnamesOfSidebarElement: string}> = (props) => {
    const { setNewTypeOfItems, classnamesOfSidebarElement } = props;
    return (
        <div className="mx-auto">
            <HomeItem classnamesOfSidebarElement={classnamesOfSidebarElement}/>
            <ResultOfSearchingItem classnamesOfSidebarElement={classnamesOfSidebarElement} setNewTypeOfItems={setNewTypeOfItems}/>
            <ActiveItem classnamesOfSidebarElement={classnamesOfSidebarElement}/>
            <StarredItem classnamesOfSidebarElement={classnamesOfSidebarElement} setNewTypeOfItems={setNewTypeOfItems}/>
        </div>
    )
};

export default NavigationSection