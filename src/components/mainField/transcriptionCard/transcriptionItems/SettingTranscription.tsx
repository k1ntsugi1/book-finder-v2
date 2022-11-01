import { useTranslation } from "react-i18next";
import cn from 'classnames';

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import RunnerBorderBottom from "../../../RunnerBorderBottom";

import SearchSVGElement from "../../../SVGElements/search/SearchSVGElement";
import GearSVGElement from "../../../SVGElements/gear/GearSVGElement";
import ArrowLeftShortFillSVGElement from "../../../SVGElements/ArrowLeftShortFillSVGElement";

import { IProps } from "./interfaces";

const SettingTranscription: React.FC<IProps> = (props) => {

    const {
        classNamesOfContainerWrapper,
        classNamesOfChildrenWrapper,
        classNamesOfSVGContainer
    } = props;

    const { t } = useTranslation();
    const appDispatch = useAppDispatch();
    const { activeItemOfOptions } = useAppSelector(store => store.uiActiveSectionOfSidebar);

    const activeItemOfOptionHandler = (itemName: string) => () => {
        activeItemOfOptions === itemName
            ? appDispatch(actionsUiActiveSectionOfSidebar.removeActiveItemOfOptions())
            : appDispatch(actionsUiActiveSectionOfSidebar.setActiveItemOfOptions({ item: itemName }));
    }

    return (
        <div className="d-flex flex-column gap-3">
            <p className="mx-auto fw-bold h5 border-bottom">{t("mainField.transcriptionCard.configuration")}</p>

            <RunnerBorderBottom
                classNamesOfContainerWrapper={classNamesOfContainerWrapper}
                classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
            >
                <span className={classNamesOfSVGContainer}>
                    <SearchSVGElement width="25" height="25" />
                    <ArrowLeftShortFillSVGElement width="20" height="20" />
                </span>
                <span onClick={activeItemOfOptionHandler('search')}>{t("mainField.transcriptionCard.searchOption")}</span>
            </RunnerBorderBottom>

            <RunnerBorderBottom
                classNamesOfContainerWrapper={classNamesOfContainerWrapper}
                classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
            >
                <span className={classNamesOfSVGContainer}>
                    <GearSVGElement width="25" height="25" />
                    <ArrowLeftShortFillSVGElement width="20" height="20" />
                </span>
                <span onClick={activeItemOfOptionHandler('setting')}>{t("mainField.transcriptionCard.settingOption")}</span>
            </RunnerBorderBottom>

        </div>
    );
};

export default SettingTranscription;