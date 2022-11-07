import { useRef, useEffect } from 'react';
import cn from 'classnames';

import SearchSection from './searchSection/SearchSection';
import SettingSection from './settingSection/SettingSection';

import { useAppSelector } from "../../store/hooks";

import NavigationLinksSection from './navigationLinksSection/NavigationLinksSection';
import ConfigurationLinksSection from './configurationLinksSection/ConfigurationLinksSection';

import toggleVisibility from '../../utils/toggleVisibility'

interface IProps {
    showStateOfSidebar: string
    setNewTypeOfItems: (type: string) => void,
}

const SidebarField: React.FC<IProps> = (props) => {

    const { setNewTypeOfItems, showStateOfSidebar } = props;

    const sidebarRef = useRef<HTMLDivElement>(null)

    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    
    const classNameOfLinkSections = cn('color-text mx-auto cursor-pointer mt-4 hover');
    const classNameOfSidebarField = cn(
        'sidebar-section',
        'color-text',
        'background-color-sidebar',
        'py-3',
        'w-100px',
        'position-absolute',
        'h-100',
        'd-flex',
        'flex-column',
        'justify-content-start',
        'gap-4',
        'shadow-lg',
        'transitionOpacity',
        {
            'opacity-0': showStateOfSidebar === 'hidden',
            'opacity-100': showStateOfSidebar === 'show',
        });


    useEffect(() => {
        toggleVisibility(sidebarRef, showStateOfSidebar)
    }, [showStateOfSidebar]);

    return (
                <div
                    className={classNameOfSidebarField}
                    style={{ 'zIndex': '1000' }}
                    ref={sidebarRef}
                >
                    <SearchSection showStateOfForm={activeItemOfOptions === 'search' ? 'visible' : 'unvisible'} />
                    <SettingSection showStateOfSetting={activeItemOfOptions === 'setting' ? 'visible' : 'unvisible'} />

                    <NavigationLinksSection className={classNameOfLinkSections} setNewTypeOfItems={setNewTypeOfItems} />
                    <ConfigurationLinksSection className={classNameOfLinkSections} />
                </div>
    )
}

export default SidebarField;