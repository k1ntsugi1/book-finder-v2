import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import { ReactComponent as Gear } from '../../../../assets/svg/gear.svg';
import { ReactComponent as GearFill } from '../../../../assets/svg/gear-fill.svg';

import { ISettingItemsProps } from "../interfaces";

const StylingItem: React.FC<ISettingItemsProps> = (props) => {

    const { className } = props;

    const appDispatch = useAppDispatch();

    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    
    return (
        <div
            className={className}
            onClick={() => {
                activeItemOfOptions === 'setting'
                    ? appDispatch(actionsUiActiveSectionOfSidebar.removeActiveItemOfOptions())
                    : appDispatch(actionsUiActiveSectionOfSidebar.setActiveItemOfOptions({ item: 'setting' }));
            }}
        >
            {activeItemOfOptions === 'setting'
                ? <GearFill width="25" height="25"/>
                : <Gear width="25" height="25"/>
            }

        </div>
    )
};

export default StylingItem;