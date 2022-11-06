import cn from 'classnames';


import SearchSection from './searchSection/SearchSection';
import SettingSection from './settingSection/SettingSection';

import { useAppSelector } from "../../store/hooks";

import NavigationLinksSection from './navigationLinksSection/NavigationLinksSection';
import ConfigurationLinksSection from './configurationLinksSection/ConfigurationLinksSection';

interface IProps {
    statusOfSidebar: string
    setNewTypeOfItems: (type: string) => void,
}

const SidebarField: React.FC<IProps> = (props) => {

    const { setNewTypeOfItems, statusOfSidebar } = props;

    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);

    const className = cn('color-text mx-auto cursor-pointer mt-4 hover');



    return (
        <>
            {statusOfSidebar === 'show' &&
                <div
                    className="sidebar-section color-text background-color-sidebar py-3 w-100px position-absolute h-100 d-flex flex-column justify-content-start gap-4 shadow-lg"
                    style={{ 'zIndex': '1000' }}
                >
                    <SearchSection showStateOfForm={activeItemOfOptions === 'search' ? 'visible' : 'unvisible'} />
                    <SettingSection showStateOfBrush={activeItemOfOptions === 'setting' ? 'visible' : 'unvisible'} />

                    <NavigationLinksSection className={className} setNewTypeOfItems={setNewTypeOfItems} />
                    <ConfigurationLinksSection className={className} />
                </div>
            }
        </>
    )
}

export default SidebarField;