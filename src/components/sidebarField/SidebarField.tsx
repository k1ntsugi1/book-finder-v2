import cn from 'classnames';

import SearchSection from './searchSection/SearchSection';
import SettingSection from './settingSection/SettingSection';

import StraightProgressBar from "./progressBars/StraightProgressBar";
import CircleProgressBar from './progressBars/CircleProgressBar';

import { useAppSelector } from "../../store/hooks";

import NavigationLinksSection from './navigationLinksSection/NavigationLinksSection';
import ConfigurationLinksSection from './configurationLinksSection/ConfigurationLinksSection';


const SidebarField: React.FC<{setNewTypeOfItems: (type: string) => void}> = (props) => {

    const { setNewTypeOfItems } = props;

    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    const { typeOfProgressBar } = useAppSelector(store => store.uiProgressBar)
    
    const className = cn('color-text mx-auto cursor-pointer mt-4 hover');

    return (
        <div
            className="color-text background-color-sidebar py-3 col-1 position-relative d-flex flex-column justify-content-start gap-4 shadow-lg"
            style={{'zIndex': '1000'}}
        >

            <SearchSection showStateOfForm={activeItemOfOptions === 'search' ? 'visible' : 'unvisible'} />
            <SettingSection showStateOfBrush={activeItemOfOptions === 'setting' ? 'visible' : 'unvisible'} />

            <NavigationLinksSection className={className} setNewTypeOfItems={setNewTypeOfItems}/>
            <ConfigurationLinksSection className={className}/>

            { typeOfProgressBar === 'straight' 
                ? <StraightProgressBar />
                : <CircleProgressBar />
            }
    
        </div>
    )
}

export default SidebarField;