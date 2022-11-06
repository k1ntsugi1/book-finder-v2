import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import RunnerBorderBottom from "../../../RunnerBorderBottom";

import { ReactComponent as SearchHeart } from '../../../../assets/svg/search-heart.svg';
import { ReactComponent as Gear } from '../../../../assets/svg/gear.svg';
import { ReactComponent as ArrowLeftShortFill } from '../../../../assets/svg/arrow-left-short.svg';

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
                    <SearchHeart width="25" height="25" />
                    <ArrowLeftShortFill width="20" height="20" />
                </span>
                <span onClick={activeItemOfOptionHandler('search')}>{t("mainField.transcriptionCard.searchOption")}</span>
            </RunnerBorderBottom>

            <RunnerBorderBottom
                classNamesOfContainerWrapper={classNamesOfContainerWrapper}
                classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
            >
                <span className={classNamesOfSVGContainer}>
                    <Gear width="25" height="25" />
                    <ArrowLeftShortFill width="20" height="20" />
                </span>
                <span onClick={activeItemOfOptionHandler('setting')}>{t("mainField.transcriptionCard.settingOption")}</span>
            </RunnerBorderBottom>

        </div>
    );
};

export default SettingTranscription;