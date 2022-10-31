import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import GearSVGElement from "../../../SVGElements/gear/GearSVGElement";
import GearFillSVGElement from "../../../SVGElements/gear/GearFillSVGElement";

import { ISettingItemsProps } from "../interfaces";

const StylingItem: React.FC<ISettingItemsProps> = (props) => {
    const { classnamesOfSidebarElement } = props;
    const appDispatch = useAppDispatch();
    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    return (
        <div
            className={classnamesOfSidebarElement}
            onClick={() => {
                activeItemOfOptions === 'setting'
                    ? appDispatch(actionsUiActiveSectionOfSidebar.removeActiveItemOfOptions())
                    : appDispatch(actionsUiActiveSectionOfSidebar.setActiveItemOfOptions({ item: 'setting' }));
            }}
        >
            {activeItemOfOptions === 'setting'
                ? <GearFillSVGElement width="25" height="25"/>
                : <GearSVGElement width="25" height="25"/>
            }

        </div>
    )
};

export default StylingItem;