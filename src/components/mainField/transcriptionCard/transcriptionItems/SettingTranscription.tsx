import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import RunnerBorderBottom from "../../../RunnerBorderBottom";

import SearchSVGElement from "../../../SVGElements/search/SearchSVGElement";
import GearSVGElement from "../../../SVGElements/gear/GearSVGElement";


const SettingTranscription: React.FC = () => {

    const { t } = useTranslation();
    const appDispatch = useAppDispatch();
    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);
    
    const activeItemOfOptionHandler = (itemName: string) => {
        activeItemOfOptions === itemName
            ? appDispatch(actionsUiActiveSectionOfSidebar.removeActiveItemOfOptions())
            : appDispatch(actionsUiActiveSectionOfSidebar.setActiveItemOfOptions({ item: itemName }));
    }

    return (
        <div className="d-flex flex-column gap-3">
            <p className="mx-auto h5 border-bottom">{t("mainField.transcriptionCard.configuration")}</p>

            <RunnerBorderBottom>
                <SearchSVGElement width="25" height="25" />
                <span onClick={() => activeItemOfOptionHandler('search')}>{t("mainField.transcriptionCard.searchOption")}</span>
            </RunnerBorderBottom>

            <RunnerBorderBottom>
                <GearSVGElement width="25" height="25" />
                <span onClick={() => activeItemOfOptionHandler('setting')}>{t("mainField.transcriptionCard.settingOption")}</span>
            </RunnerBorderBottom>

        </div>
    );
};

export default SettingTranscription;