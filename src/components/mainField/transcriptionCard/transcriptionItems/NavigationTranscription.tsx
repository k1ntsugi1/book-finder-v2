import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import cn from 'classnames';

import { useAppDispatch } from "../../../../store/hooks";
import { actionsUiActiveSectionOfSidebar } from "../../../../store/slices/uiActiveSectionOfSidebarSlice";

import RunnerBorderBottom from "../../../RunnerBorderBottom";

import HomeSVGElement from "../../../SVGElements/home/HomeSVGElement";
import BookMarksSVGElement from "../../../SVGElements/bookMarks/BookMarksSVGElement";
import BookSVGElement from "../../../SVGElements/book/BookSVGElement";
import StarSVGElement from "../../../SVGElements/star/StarSVGElement";
import ArrowLeftShortFillSVGElement from "../../../SVGElements/ArrowLeftShortFillSVGElement";

import { IProps } from "./interfaces";

const NavigationTranscription: React.FC<IProps> = (props) => {

    const {
        classNamesOfContainerWrapper,
        classNamesOfChildrenWrapper,
        classNamesOfSVGContainer
    } = props;

    const { t } = useTranslation();
    const navigate = useNavigate();
    const appDispatch = useAppDispatch();

    const navigationHandler = (pathname: string)=> () => {
        const mappignPathnameToPageName: { [key: string]: string } = {
            '/': 'home',
            '/result': 'result',
            '/item': 'item',
            '/starred': 'star'
        }
        appDispatch(actionsUiActiveSectionOfSidebar.setActivePage({ page: mappignPathnameToPageName[pathname] }));
        navigate(pathname)
    };

    return (
        <div className="d-flex flex-column gap-3">

            <p className="mx-auto fw-bold h5 border-bottom">{t("mainField.transcriptionCard.navigation")}</p>

            <RunnerBorderBottom
                classNamesOfContainerWrapper={classNamesOfContainerWrapper}
                classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
            >
                <span className={classNamesOfSVGContainer}>
                    <HomeSVGElement width="25" height="25" />
                    <ArrowLeftShortFillSVGElement width="20" height="20"/>
                </span>
                <span onClick={navigationHandler('/')}>{t("mainField.transcriptionCard.homeLink")}</span>
            </RunnerBorderBottom>

            <RunnerBorderBottom
                classNamesOfContainerWrapper={classNamesOfContainerWrapper}
                classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
            >
                <span className={classNamesOfSVGContainer}>
                    <BookMarksSVGElement width="25" height="25" />
                    <ArrowLeftShortFillSVGElement width="20" height="20"/>
                </span>
                <span onClick={navigationHandler('/result')}>{t("mainField.transcriptionCard.resultOfSearchingLink")}</span>
            </RunnerBorderBottom>

            <RunnerBorderBottom
                classNamesOfContainerWrapper={classNamesOfContainerWrapper}
                classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
            >
                <span className={classNamesOfSVGContainer}>
                    <BookSVGElement width="25" height="25" />
                    <ArrowLeftShortFillSVGElement width="20" height="20"/>
                </span>
                <span onClick={navigationHandler('/item')}>{t("mainField.transcriptionCard.viewableItemLink")}</span>
            </RunnerBorderBottom>

            <RunnerBorderBottom
                classNamesOfContainerWrapper={classNamesOfContainerWrapper}
                classNamesOfChildrenWrapper={classNamesOfChildrenWrapper}
            >
                <span className={classNamesOfSVGContainer}>
                    <StarSVGElement width="25" height="25" />
                    <ArrowLeftShortFillSVGElement width="20" height="20"/>
                </span>
                <span onClick={navigationHandler('/starred')}>{t("mainField.transcriptionCard.starredItemsLink")}</span>
            </RunnerBorderBottom>

        </div>
    );
};

export default NavigationTranscription