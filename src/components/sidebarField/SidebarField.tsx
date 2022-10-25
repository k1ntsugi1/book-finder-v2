import cn from 'classnames';


import SearchSection from './searchSection/SearchSection';
import StylingSection from './settingSection/SettingSection';

import StraightProgressBar from "./progressBars/StraightProgressBar";
import CircleProgressBar from './progressBars/CircleProgressBar';

import { useAppSelector } from "../../store/hooks";

import NavigationSection from './navigationLinksSection/NavigationLinksSection';
import SettingSection from './configurationLinksSection/ConfigurationLinksSection';


const SidebarField: React.FC<{setNewTypeOfItems: (type: string) => void}> = (props) => {

    const { setNewTypeOfItems } = props;

    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    const { typeOfProgressBar } = useAppSelector(store => store.uiProgressBar)
    const classnamesOfSidebarElement = cn('mx-auto cursor-pointer mt-4 hover');

    return (
        <div
            className="col-1 shadow-lg py-3 position-relative d-flex flex-column justify-content-start gap-4"
            style={{
                'zIndex': '1000',
                'background': 'var(--color-sidebar)',
                'color': 'var(--color-text)',
            }}
        >

            <SearchSection showStateOfForm={activeItemOfOptions === 'search' ? 'visible' : 'unvisible'} />
            <StylingSection showStateOfBrush={activeItemOfOptions === 'brush' ? 'visible' : 'unvisible'} />

            <NavigationSection classnamesOfSidebarElement={classnamesOfSidebarElement} setNewTypeOfItems={setNewTypeOfItems}/>
            <SettingSection classnamesOfSidebarElement={classnamesOfSidebarElement}/>

            { typeOfProgressBar === 'straight' 
                ? <StraightProgressBar />
                : <CircleProgressBar />
            }
            
           
        </div>
    )
}

export default SidebarField;